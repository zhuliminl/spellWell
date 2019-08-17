import * as path from 'path'

import { idArg, stringArg } from 'nexus'
import { makePrismaSchema, prismaObjectType } from 'nexus-prisma'

import { GraphQLServer } from 'graphql-yoga'
import datamodelInfo from './generated/nexus-prisma'
import { prisma } from './generated/prisma-client'
import * as allTypes from './resolvers'

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




// A `main` function so that we can use async/await
async function main() {
  // Create a new user called `Alice`
  // const newUser = await prisma.createUser({ name: 'Alice' })
  // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  // const allUsers = await prisma.users()
  // console.log(allUsers)

  // const user = await prisma.user({ id: 'cjzf767rz003a075919a92e9g' })
  // console.log('FIN user', user)
  
  // const usersCalledAlice = await prisma.users({
  //   where: {
  //     name: 'Alice',
  //   },
  // })
  // console.log('FIN alice', usersCalledAlice)


  // const updatedUser = await prisma.updateUser({
  //   where: { id: 'cjzf767rz003a075919a92e9g' },
  //   data: { name: 'Bob' },
  // })
  // console.log('FIN updateUser', updatedUser)

  // const newUser = await prisma.createUser({
  //   name: 'saul', 
  //   age: '34',
  //   email: 'zihulimilnl@gmail.com',
  //   posts: {
  //     create: [
  //       {
  //         title: 'xxxxxxxxxxx',
  //       },
  //       {
  //         title: 'Subscribe to GraphQL Weekly for GraphQL news',
  //       },
  //     ]
  //   }
  // })

  // const allPosts = await prisma.posts()
  // console.log(allPosts)


  // const postsByUser = await prisma.user({
  //   email: 'zhuliminl@gmail.com'
  // }).posts()

  // console.log('FIN xxxxxx', JSON.stringify(postsByUser))


}

main().catch(e => console.error(e))