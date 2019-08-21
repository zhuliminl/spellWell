import 'module-alias/register';

import * as allTypes from './src/resolvers';
import * as path from 'path';

import { ApolloServer } from 'apollo-server';
import { applyMiddleware } from 'graphql-middleware';
import datamodelInfo from './generated/nexus-prisma';
import { logger } from '@/common/logger';
import { makePrismaSchema } from 'nexus-prisma';
import { middlewares } from './src/middlewares';
import { prisma } from './generated/prisma-client';

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

  logger.info('FIN allTypes', allTypes)

  const schemaWithMiddleware = applyMiddleware(
    schema,
    ...middlewares,
  )


  const server = new ApolloServer({
    schema: schemaWithMiddleware,
    context: req => {
      return {
        ...req,
        prisma,
      }
    }
  })
  server.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000`),
  )
}

main().catch(e => {
  logger.error(e)
})