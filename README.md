# UniqueNetwork repository with examples of usage [Subsquid processor](https://docs.subsquid.io/develop-a-squid/squid-processor/configuration/).

## Requirements

- NodeJS 14 or later.
- Docker engine
- Docker Compose

## Prepare environment

First of all you should start docker container with PostgreSQL.

`npm run environment:up`

PostgreSQL is a part of Subsquid processor architecture and use for save scan state.

Install npm dependencies.

`npm install`

## Scan Unique tokens

We have build simple example for demonstrate how to scan tokens from blockchain.

In our example you can see [SDK](https://docs.unique.network/sdk-docs/). It's out toolkit for call blockchain API by easy way.

You can try it by running:

`npm run tokens-processor`

In console stdout you can see result of getting tokens.

### Let's look this example near.

Instantiate new SubstrateProcessor class with TypeORM database instance as argument.
And set Subsquid archive address and blockchain websocket address.

```typescript
export const processor = new SubstrateProcessor(database);
processor.setDataSource({
  archive: process.env.ARCHIVE_GQL_URL as string,
  chain: process.env.CHAIN_WS_URL,
});
```

After that we can set range of scan for processor.

```typescript
processor.setBlockRange({ from: 0 });
```

And we should subscribe to special event for catch information about created tokens.

```typescript
processor.addEventHandler(EventName.ITEM_CREATED, (ctx) => catchCreatedToken(ctx, sdkClient));
```

And in the end just run the processor.

```typescript
processor.run();
```

In this case we catching events about creating tokens and can get information about collection id and token id from event arguments.

If we know collection id and token id we can get token from blockchain by SDK call.

```typescript
async function catchCreatedToken(ctx: EventHandlerContext<Store>, sdk: Sdk) {
  const [collectionId, tokenId] = ctx.event.args;
  const token = await sdk.tokens.get({ collectionId, tokenId });
  console.log('unique token: ', token);
}
```

Full list of events you can find in the [events.ts](events.ts) file.
Events params documentation is in progress, but right now you can try to review events and it's params at [link](https://archive.unique.network/opal/explorer/graphql) to firesquid GraphQL.
