import { PostService } from '../../services/post'
import { UserInput } from '../../types/post'
import { UserContext } from '../../types/context'

export default {
  Mutation: {
    addPost: (_parents: any, args: UserInput, context: UserContext) => {
      try {
        if (!context.userid) {
          throw new Error('not login')
        }

        const post = new PostService(args, context)
        const result = post.publish()
        return result
      } catch (error) {
        return {
          isSuccess: false,
          description: error,
        }
      }
    },
  },
}
