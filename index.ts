import * as allTypes from './resolvers'
import * as path from 'path'

import { makePrismaSchema, prismaObjectType } from 'nexus-prisma'
import { ApolloServer, gql } from 'apollo-server'

import { GraphQLServer } from 'graphql-yoga'
import datamodelInfo from './generated/nexus-prisma'
import { prisma } from './generated/prisma-client'

async function main() {
  const schema = makePrismaSchema({
    types: allTypes,
    prisma: {
      datamodelInfo,
      client: prisma,
    },

    outputs: {
      schema: path.join(__dirname, './generated/schema.graphql'),
      typegen: path.join(__dirname, './generated/nexus.ts'),
    },
  })

  // const server = new GraphQLServer({
  //   schema,
  //   context: { prisma },
  // })
  // server.start(() => console.log('Server is running on http://localhost:4000'))

  console.log('FIN all', allTypes)
  // console.log('FIN all', allTypes['resolvers'])

  const server = new ApolloServer({
    schema,
    context: { prisma },
  })
  server.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000`),
  )


}

main().catch(e => console.error(e))