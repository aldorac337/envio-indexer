// @ts-nocheck
/*
 * EmissionManager Event Handlers
 */
import { EmissionManager } from "generated";

EmissionManager.EmissionAdminUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reward: event.params.reward,
    oldAdmin: event.params.oldAdmin,
    newAdmin: event.params.newAdmin,
  };
  context.EmissionAdminUpdated.set(entity);
});

EmissionManager.OwnershipTransferred.handler(async ({ event, context }) => {
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

EmissionManager.Upgraded.handler(async ({ event, context }) => {
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