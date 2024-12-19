// module.exports = {
//     Movie: async (user, args, { models }) => {
//     return await models.Movie.find({ author: user._id }).sort({ _id: -1 });
//     },
//     favorites: async (user, args, { models }) => {
//     return await models.Movie.find({ favoritedBy: user._id }).sort({ _id: -1 });
//     }
//     };
module.exports = {
    Movies: async (user, args, { models }) => {
        return await models.Movie.find({ author: user.id });
    },
    favorites: async (user, args, { models }) => {
        return await models.Movie.find({ _id: { $in: user.favorites } });
    }
};