import userSeed from './seed/user.json'
import materialSeed from './seed/material.json'
import { prisma } from '../generated/prisma-client'
import { logger } from '../src/common/logger'

async function main() {
  // initUsers()
  initMaterails()
}

function initUsers() {
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

function initMaterails() {
  const materials = materialSeed['materials'] || []
  materials.forEach(async material => {
    try {
      await prisma.createMaterial({
        ...material
      })
    } catch (err) {
      logger.error(err)
    }
  })

}

main()