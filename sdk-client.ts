import { Sdk } from '@unique-nft/substrate-client';
import '@unique-nft/substrate-client/extrinsics';
import '@unique-nft/substrate-client/tokens';
import '@unique-nft/substrate-client/balance';
import * as dotenv from 'dotenv';

dotenv.config();


export async function getSdkClient(): Promise<Sdk> {
  const sdkClient = new Sdk({
    chainWsUrl: process.env.CHAIN_WS_URL as string,
  });

  await sdkClient.connect();

  return sdkClient;
}