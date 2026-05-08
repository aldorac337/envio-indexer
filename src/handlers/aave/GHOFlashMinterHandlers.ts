// @ts-nocheck
/*
 * GHOFlashMinter Event Handlers
 */
import { GHOFlashMinter } from "generated";

GHOFlashMinter.FlashMint.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    receiver: event.params.receiver,
    amount: event.params.amount,
    fee: event.params.fee,
  };
  context.FlashMint.set(entity);
}); 