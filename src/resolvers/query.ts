import { prismaObjectType } from 'nexus-prisma';

export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['materials', 'users', 'systems']);
    t.string('saul', {
      resolve: () => 'saul'
    })

    // t.list.field('feed', {
    //   type: 'User',
    //   resolve: (_, args, ctx) => {
    //     // return 'xxx'
    //     // return ctx.prisma.posts({ where: { published: true } })
    //     return ctx.prisma.posts
    //   }
    // })
  }
});
