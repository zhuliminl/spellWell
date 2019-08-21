export const authMid = {
  Query: {
    saul: async (resolve, parent, args, context, info) => {
      // console.log('FIN context', context)
      // console.log('FIN info', info)
      // console.log('FIN args', args)
      return 'jjjjjjjj'
    },
  },
}

/*
const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
  Counter: {
    countStr: counter => `Current count: ${counter.count}`,
  },
  Subscription: {
    counter: {
      subscribe: (parent, args, { pubsub }) => {
        const channel = Math.random()
          .toString(36)
          .substring(2, 15) // random channel name
        let count = 0
        setInterval(
          () => pubsub.publish(channel, { counter: { count: count++ } }),
          2000,
        )
        return pubsub.asyncIterator(channel)
      },
    },
  },
}
*/
