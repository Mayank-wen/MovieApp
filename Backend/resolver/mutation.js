const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {
  AuthenticationError,
  ForbiddenError,
} = require("apollo-server-express");
require("dotenv").config();
const gravatar = require("../utils/gravatar");
module.exports = {
  addMovie: async (parent, args, { models, user }) => {
    if (!user) {
      throw new AuthenticationError("You must be signed in to add a movie");
    }
    try {
      const movie = await models.Movie.create({
        title: args.title,
        genre: args.genre,
        imgsrc: args.imgsrc,
        rating: args.rating,
        releaseDate: args.releaseDate,
        description: args.description,
      });

      return movie;
    } catch (error) {
      console.error("Error adding movie:", error);
      throw new Error("Failed to add movie");
    }
  },
  signUp: async (parent, { username, email, password }, { models }) => {
    email = email.trim().toLowerCase();
    const hashed = await bcrypt.hash(password, 10);
    const avatar = gravatar(email);
    try {
      const user = await models.User.create({
        username,
        email,
        avatar,
        password: hashed,
      });
      return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    } catch (err) {
      console.log(err);
      throw new Error("Error creating account");
    }
  },
  signIn: async (parent, { username, email, password }, { models }) => {
    if (email) {
      email = email.trim().toLowerCase();
    }
    const user = await models.User.findOne({
      $or: [{ email }, { username }],
    });
    if (!user) {
      throw new AuthenticationError("Error signing in");
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new AuthenticationError("Error signing in");
    }
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  },
  toggleFavorite: async (parent, { id }, { models, user }) => {
    if (!user) {
      throw new AuthenticationError();
    }
    let MovieCheck = await models.Movie.findById(id);
    const hasUser = MovieCheck.favoritedBy.indexOf(user.id);
    if (hasUser >= 0) {
      return await models.Movie.findByIdAndUpdate(
        id,
        {
          $pull: {
            favoritedBy: new mongoose.Types.ObjectId(user.id),
          },
          $inc: {
            favoriteCount: -1,
          },
        },
        {
          new: true,
        }
      );
    } else {
      return await models.Movie.findByIdAndUpdate(
        id,
        {
          $push: { favoritedBy: new mongoose.Types.ObjectId(user.id) },
          $inc: { favoriteCount: 1 },
        },
        { new: true }
      );
    }
  },
};

}
/*const signUp = async (_, { username, email, password }, { models }) => {
  try {
    // Check if the user already exists
    const existingUser = await models.User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const user = await models.User.create({
      username,
      email,
      password: hashedPassword,
    });

    return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  } catch (err) {
    console.error(err);
    throw new Error('Error creating account');
  }
};
 */
