import { prismaObjectType } from 'nexus-prisma';
import { idArg, stringArg } from 'nexus'

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    // t.prismaFields(['*',])
    t.prismaFields(['createUser', 'updateUser'])
    t.field('createDraft', {
      type: 'Post',
      args: {
        title: stringArg(),
        authorId: idArg({ nullable: true }),
      },
      resolve: (_, { title, authorId }, ctx) =>
        ctx.prisma.createPost({
          title,
          author: { connect: { id: authorId } },
        }),
    })

    t.field('publish', {
      type: 'Post',
      nullable: true,
      args: {
        id: idArg(),
      },
      // args: {
      //   title: stringArg(),
      //   authorId: idArg({ nullable: true }),
      // },
      resolve: (_, { id }, ctx) => {
        console.log('FIN publish post id', id)

        return ctx.prisma.updatePost({
          where: { id },
          data: { published: true }
        })
        // return ctx.prisma.createPost({
        //   title: 'publishxxxxxxx',
        // })
      }
    })
  }
});
