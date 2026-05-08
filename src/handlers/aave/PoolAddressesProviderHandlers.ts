// @ts-nocheck
/*
 * PoolAddressesProvider Event Handlers
 */
import { PoolAddressesProvider } from "generated";

PoolAddressesProvider.ACLAdminUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    oldAddress: event.params.oldAddress,
    newAddress: event.params.newAddress,
  };
  context.ACLAdminUpdated.set(entity);
});

PoolAddressesProvider.ACLManagerUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    oldAddress: event.params.oldAddress,
    newAddress: event.params.newAddress,
  };
  context.ACLManagerUpdated.set(entity);
});

PoolAddressesProvider.AddressSet.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    idBytes: event.params.id,
    oldAddress: event.params.oldAddress,
    newAddress: event.params.newAddress,
  };
  context.AddressSet.set(entity);
});

PoolAddressesProvider.AddressSetAsProxy.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    idBytes: event.params.id,
    proxyAddress: event.params.proxyAddress,
    oldImplementationAddress: event.params.oldImplementationAddress,
    newImplementationAddress: event.params.newImplementationAddress,
  };
  context.AddressSetAsProxy.set(entity);
});

PoolAddressesProvider.MarketIdSet.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    oldMarketId: event.params.oldMarketId,
    newMarketId: event.params.newMarketId,
  };
  context.MarketIdSet.set(entity);
});

PoolAddressesProvider.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };
  context.OwnershipTransferred.set(entity);
});

PoolAddressesProvider.PoolConfiguratorUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    oldAddress: event.params.oldAddress,
    newAddress: event.params.newAddress,
  };
  context.PoolConfiguratorUpdated.set(entity);
});

PoolAddressesProvider.PoolDataProviderUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    oldAddress: event.params.oldAddress,
    newAddress: event.params.newAddress,
  };
  context.PoolDataProviderUpdated.set(entity);
});

PoolAddressesProvider.PoolUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    oldAddress: event.params.oldAddress,
    newAddress: event.params.newAddress,
  };
  context.PoolUpdated.set(entity);
});

PoolAddressesProvider.PriceOracleSentinelUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    oldAddress: event.params.oldAddress,
    newAddress: event.params.newAddress,
  };
  context.PriceOracleSentinelUpdated.set(entity);
});

PoolAddressesProvider.PriceOracleUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    oldAddress: event.params.oldAddress,
    newAddress: event.params.newAddress,
  };
  context.PriceOracleUpdated.set(entity);
});

PoolAddressesProvider.ProxyCreated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    idBytes: event.params.id,
    proxyAddress: event.params.proxyAddress,
    implementationAddress: event.params.implementationAddress,
  };
  context.ProxyCreated.set(entity);
});

PoolAddressesProvider.Upgraded.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    implementation: event.params.implementation,
  };
  context.Upgraded.set(entity);
}); 