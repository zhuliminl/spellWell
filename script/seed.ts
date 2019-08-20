import userSeed from './seed/user.json'
import { prisma } from '../generated/prisma-client'
import { logger } from '../src/common/logger'

async function main() {
  const users = userSeed['users'] || []

  users.forEach(async user => {
    // log('FIN 正在创建用户', user['name'])
    logger.info('正在创建用户', user['name'])
    try {
      await prisma.createUser({
        ...user
      })
    } catch (err) {
      // console.log('FIN CreateUserError', err)
      logger.error(err)
    }
  })
}

main()