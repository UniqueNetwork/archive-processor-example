import { TypeormDatabase, TypeormDatabaseOptions } from '@subsquid/typeorm-store';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const pgDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

class Database extends TypeormDatabase {
  con: DataSource;
  constructor(connect: DataSource, options?: TypeormDatabaseOptions) {
    super(options);
    this.con = connect;
  }

  async connect(): Promise<number> {
    await this.con.initialize()
    try {
        let height = await this.con.transaction('SERIALIZABLE', async em => {
            await em.query(`CREATE SCHEMA IF NOT EXISTS ${this.statusSchema}`)
            await em.query(`
                CREATE TABLE IF NOT EXISTS ${this.statusSchema}.status (
                    id int primary key,
                    height int not null
                )
            `)
            let status: {height: number}[] = await em.query(
                `SELECT height FROM ${this.statusSchema}.status WHERE id = 0`
            )
            if (status.length == 0) {
                await em.query(`INSERT INTO ${this.statusSchema}.status (id, height) VALUES (0, -1)`)
                return -1
            } else {
                return status[0].height
            }
        })
        return height
    } catch(e: any) {
        await this.con.destroy().catch(() => {}) // ignore error
        throw e
    }
}
}

export const database = new Database(pgDataSource, undefined);