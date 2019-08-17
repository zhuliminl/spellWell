import { prisma } from './generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {
  // Create a new user called `Alice`
  const newUser = await prisma.createUser({ name: 'Alice' })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)

  const user = await prisma.user({ id: 'cjzf767rz003a075919a92e9g' })
  console.log('FIN user', user)
  
  const usersCalledAlice = await prisma.users({
    where: {
      name: 'Alice',
    },
  })
  console.log('FIN alice', usersCalledAlice)


  const updatedUser = await prisma.updateUser({
    where: { id: 'cjzf767rz003a075919a92e9g' },
    data: { name: 'Bob' },
  })
  console.log('FIN updateUser', updatedUser)


}

main().catch(e => console.error(e))