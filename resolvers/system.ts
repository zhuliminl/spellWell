import { prismaObjectType } from 'nexus-prisma';

export const System = prismaObjectType({
  name: 'System',
  definition(t) {
    t.prismaFields(['id', 'name', 'slogan']);
  }
});