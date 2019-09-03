const { GraphQLServer } = require('graphql-yoga')

const visits = require('./visits.data');

const typeDefs = `
  type Query {
    visits: [Visit!]
  }
  type Visit {
    datetime: String!
    device: String!
    ip: String!
  }
`

const resolvers = {
  Query: {
    visits: () => visits,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))