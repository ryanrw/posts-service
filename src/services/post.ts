import { Pool, QueryConfig } from 'pg'

import { Status } from '../types/status'
import { UserInput } from '../types/post'
import { UserContext } from '../types/context'

export class PostService {
  title: string
  content: string
  userid: string
  pool: Pool

  constructor(userInput?: UserInput, context?: UserContext) {
    this.title = userInput.title
    this.content = userInput.content
    this.userid = context.userid
    this.pool = context.pool
  }

  /**
   * add post to database when userInput is not null
   */
  async publish() {
    if (!this.title || !this.content) {
      return {
        isSuccess: false,
        description: `No title or content provide`,
      } as Status
    }

    const query: QueryConfig = {
      text: 'INSERT INTO posts(authorid, title, content) VALUES($1, $2, $3)',
      values: [this.userid, this.title, this.content],
    }

    await this.pool.query(query)

    return {
      isSuccess: true,
      description: `Query successfully`,
    } as Status
  }
}
