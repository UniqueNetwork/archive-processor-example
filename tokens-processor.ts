import { EventName } from './events';
import { processor } from './processor';
import { EventHandlerContext } from '@subsquid/substrate-processor';
import { Store } from '@subsquid/typeorm-store';
import { getSdkClient } from './sdk-client';
import { Sdk } from '@unique-nft/substrate-client';


async function catchCreatedToken(ctx: EventHandlerContext<Store>, sdk: Sdk) {
  const [collectionId, tokenId] = ctx.event.args;
  const token = await sdk.tokens.get({ collectionId, tokenId });
  console.log('unique token: ', token);
}

async function processingTokens(): Promise<void> {
  const sdkClient = await getSdkClient();
  processor.setBlockRange({ from: 0 });
  processor.addEventHandler(EventName.ITEM_CREATED, (ctx) => catchCreatedToken(ctx, sdkClient));
  processor.run();
}

processingTokens();
