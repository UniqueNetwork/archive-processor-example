import { SubstrateProcessor } from '@subsquid/substrate-processor';
import * as dotenv from 'dotenv';
import { database } from './pg-datasource';

dotenv.config();

export const processor = new SubstrateProcessor(database);
processor.setDataSource({
  archive: process.env.ARCHIVE_GQL_URL as string,
  chain: process.env.CHAIN_WS_URL,
});
