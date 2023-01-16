import chalk from 'chalk'
import pgPromise from 'pg-promise'
import type { IMain, IDatabase } from 'pg-promise'

// const options = {
//   query: (e: { query: string }) => {
//     // console log each query
//     console.log(e.query)
//   }
// }

const pgp: IMain = pgPromise({
  query(e: any) {
    console.log(chalk.bgGreen(`pgp result: ${e.query}`))
  },
  // receive(data: Record<string, any>, result: any, e: any) {
  //   console.log(chalk.bgGreen(`pgp received: ${e.query}`))
  // }
})

export const db: IDatabase<any> = pgp({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB,
  user: process.env.USER,
  password: process.env.PASSWORD
})

// add conditional database for dev and test
// const setDatabase = () => {
//   if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
//     return pgp({
//       port: process.env.DB_PORT as any,
//       host: process.env.HOST,
//       user: process.env.USER,
//       password: process.env.PASSWORD,
//       max: process.env.MAX_DB_CONNECTIONS
//     })
//   } else if(process.env.NODE_ENV === 'production') {
//     return pgp(process.env.DATABASE_URL as any)
//   }
// }

// // call pgp conditional function
// const db = setDatabase()

// // export
// module.exports = db

// import { Sequelize, Model, DataTypes, Dialect } from 'sequelize'


// export const connect = () => {
//   const db: Record<string, any> = {}
//   const host = process.env.HOST
//   const user = process.env.USER ?? ''
//   const password = process.env.PASSWORD
//   const database = process.env.DB ?? ''
//   const dialect = process.env.DIALECT ?? 'postgres'

//   const sequalize = new Sequelize(database, user, password, {
//     host,
//     dialect: dialect as Dialect,
//     pool: {
//       max: 10,
//       min: 0,
//       acquire: 20000,
//       idle: 10000
//     }
//   })

//   db.Sequelize = Sequelize
//   db.sequalize = sequalize
//   // db.tasks = require('~/model/task.model')(sequelize, DataTypes, Model)

//   return db
// }
