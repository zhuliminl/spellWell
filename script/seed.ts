import userSeed from './seed/user.json'
import { prisma } from '../generated/prisma-client'

async function main() {
  const users = userSeed['users'] || []

  users.forEach(async user => {
    // log('FIN 正在创建用户', user['name'])
    // log.info('xxx')
    try {
      await prisma.createUser({
        ...user
      })
    } catch (err) {
      console.log('FIN CreateUserError', err)
    }
  })
}

main()