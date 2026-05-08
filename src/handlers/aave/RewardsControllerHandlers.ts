// @ts-nocheck
/*
 * RewardsController Event Handlers
 */
import { RewardsController } from "generated";

RewardsController.Upgraded.handler(async ({ event, context }) => {
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

RewardsController.Accrued.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    reward: event.params.reward,
    user: event.params.user,
    assetIndex: event.params.assetIndex,
    userIndex: event.params.userIndex,
    rewardsAccrued: event.params.rewardsAccrued,
  };
  context.Accrued.set(entity);
});

RewardsController.AssetConfigUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    reward: event.params.reward,
    oldEmission: event.params.oldEmission,
    newEmission: event.params.newEmission,
    oldDistributionEnd: event.params.oldDistributionEnd,
    newDistributionEnd: event.params.newDistributionEnd,
    assetIndex: event.params.assetIndex,
  };
  context.AssetConfigUpdated.set(entity);
});

RewardsController.ClaimerSet.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    user: event.params.user,
    claimer: event.params.claimer,
  };
  context.ClaimerSet.set(entity);
});

RewardsController.RewardsClaimed.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    user: event.params.user,
    to: event.params.to,
    claimer: event.params.claimer,
    amount: event.params.amount,
  };
  context.RewardsClaimed.set(entity);
});

RewardsController.RewardsAccrued.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    user: event.params.user,
    amount: event.params.amount,
  };
  context.RewardsAccrued.set(entity);
});

RewardsController.TransferStrategyInstalled.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reward: event.params.reward,
    transferStrategy: event.params.transferStrategy,
  };
  context.TransferStrategyInstalled.set(entity);
});

RewardsController.RewardOracleUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reward: event.params.reward,
    rewardOracle: event.params.rewardOracle,
  };
  context.RewardOracleUpdated.set(entity);
}); 