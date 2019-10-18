import { gql } from 'apollo-server'

export default gql`
  type Post {
    userid: string
    title: string
    content: string
  }
`
