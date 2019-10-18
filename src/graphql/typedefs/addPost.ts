// example query
import { gql } from 'apollo-server'

// @todo add post query
export default gql`
  extend type Mutation {
    addPost(title: String!, content: String!): Status!
  }
`
