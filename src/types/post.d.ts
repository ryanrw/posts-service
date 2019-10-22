import { Pool } from 'pg'

export interface UserInput {
  title: string
  content: string
}

export interface UserFindPostInput {
  postid: Number
}

export interface DBResult {
  postid: Number
  username: string
  title: string
  content: string
}

export interface MappedResult {
  postid: Number
  author: string
  title: string
  content: string
}
