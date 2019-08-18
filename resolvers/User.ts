import { prismaObjectType } from 'nexus-prisma';

export const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields(['id', 'name', 'posts']);
    t.string('fullname', {
      resolve: () => 'saul'
    })
    // t.prismaFields(['*']);
    // t.list.field('foo', {
    //   type: 'User',
    //   resolve: () =>
    //     'xx'
    // });
  }
});