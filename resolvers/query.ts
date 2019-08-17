import { prismaObjectType } from 'nexus-prisma';

export const Query = prismaObjectType({
    name: 'Query',
    definition(t) {
        t.prismaFields(['posts']);
        t.list.field('feed', {
        type: 'Post',
        resolve: (_, args, ctx) =>
            ctx.prisma.posts({ where: { published: true } }),
        })
    }
});
