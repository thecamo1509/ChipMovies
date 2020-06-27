const { gql } = require('apollo-server')

const typeDefs = gql`
    type Movie {
        id: Int!
        title: String!
        locations: String!
      }

    type Query {
        movie(id: Int!): Movie
        allMovies: [Movie!]!
    }

    type Mutation {
        createMovie(title: String!, locations: String!): Movie!
    }
`

module.exports = typeDefs