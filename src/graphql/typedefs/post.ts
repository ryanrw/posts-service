import { gql } from 'apollo-server'

export default gql`
  type Post {
    postid: Int!
    author: String!
    title: String!
    content: String!
  }
`
