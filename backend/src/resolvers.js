const resolvers = {
    Query: {
        async movie (root, { id }, { models }) {
              return models.Movie.findById(id)
        },
        async allMovies (root, args, { models }) {
              return models.Movie.findAll()
        }
      },
    Mutation: {
        async createMovie (root, { title, locations}, { models }) {
            return models.Movie.create({
                title,
                locations
              })
        }
    },
}

module.exports = resolvers