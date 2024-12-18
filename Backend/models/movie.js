const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    favoriteCount: {
      type: Number,
      default: 0,
    },

    favoritedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const movie = mongoose.model("movie", movieSchema);
module.exports = Movie;
