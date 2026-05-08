// @ts-nocheck
/*
 * AaveMerkleDistributor Event Handlers
 */
import { AaveMerkleDistributor } from "generated";

AaveMerkleDistributor.Claimed.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    user: event.params.user,
    token: event.params.token,
    amount: event.params.amount,
  };
  context.Claimed.set(entity);
});

AaveMerkleDistributor.MerkleRootUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    merkleRoot: event.params.merkleRoot,
  };
  context.MerkleRootUpdated.set(entity);
});

AaveMerkleDistributor.MerkleRootProposed.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    merkleRoot: event.params.merkleRoot,
    epoch: event.params.epoch,
  };
  context.MerkleRootProposed.set(entity);
}); 