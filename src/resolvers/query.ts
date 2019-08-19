import { prismaObjectType } from 'nexus-prisma';

export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['materials', 'users', 'systems']);



    // t.list.field('feed', {
    //   type: 'Material',
    //   resolve: (_, args, ctx) => {
    //     return 'xxx'
    //     // ctx.prisma.posts({ where: { published: true } }),
    //   }
    // })
  }
});
