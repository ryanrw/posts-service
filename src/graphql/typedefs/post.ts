// example query
import { gql } from 'apollo-server'

export default gql`
  extend type Mutation {
    post(title: String!, content: String!, userid: String!): Status!
  }
`
