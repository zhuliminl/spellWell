import { prismaObjectType } from 'nexus-prisma';
import {idArg, stringArg} from 'nexus'

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['createUser',])
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
  }
});
