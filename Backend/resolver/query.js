module.exports = {
    movies: async (parent, args, { models }) => {
        return await models.Movie.find().limit(100);
    },
    movie: async (parent, args) => {
        return await models.Movie.findById(args.id);
    },
    movieFeed: async (parent, { cursor }, { models }) => {
        const limit = 10;
        let hasNextPage = false;
        let cursorQuery = {};
        if (cursor) {
            cursorQuery = { _id: { $lt: cursor } };
        } let movies = await models.Movie.find(cursorQuery)
        .sort({ _id: -1 })
        .limit(limit + 1);
        if (movies.length > limit) {
                hasNextPage = true;
                movies = movies.slice(0, -1);
            } const newCursor = movies[movies.length - 1]._id;
        return {
            notes,
            cursor: newCursor,
            hasNextPage
        };
    }
}

