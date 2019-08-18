import { prismaObjectType } from 'nexus-prisma';

export const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields(['id', 'name', 'materials']);
    t.string('saul', {
      resolve: () => 'saul'
    })
    t.string('fullname', {
      resolve: ({ name }, args, ctx) => name.toUpperCase(),
    })
    // t.prismaFields(['*']);
    // t.list.field('foo', {
    //   type: 'User',
    //   resolve: () =>
    //     'xx'
    // });
  }
});