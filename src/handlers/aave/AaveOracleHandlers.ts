// @ts-nocheck
/*
 * AaveOracle Event Handlers
 */
import { AaveOracle } from "generated";

AaveOracle.AssetSourceUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    source: event.params.source,
  };
  context.AssetSourceUpdated.set(entity);
});

AaveOracle.BaseCurrencySet.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    baseCurrency: event.params.baseCurrency,
    baseCurrencyUnit: event.params.baseCurrencyUnit,
  };
  context.BaseCurrencySet.set(entity);
});

AaveOracle.FallbackOracleUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    fallbackOracle: event.params.fallbackOracle,
  };
  context.FallbackOracleUpdated.set(entity);
});

AaveOracle.Upgraded.handler(async ({ event, context }) => {
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