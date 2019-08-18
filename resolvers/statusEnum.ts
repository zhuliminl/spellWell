import {prismaEnumType} from 'nexus-prisma'
const StatusEnum = prismaEnumType({
  name: "StatusEnum",
  members: ["ACTIVE", "DISABLED"],
});

