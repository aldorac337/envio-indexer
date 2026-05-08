// @ts-nocheck
/*
 * ACLManager Event Handlers
 */
import { ACLManager } from "generated";

ACLManager.RoleAdminChanged.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    role: event.params.role,
    previousAdminRole: event.params.previousAdminRole,
    newAdminRole: event.params.newAdminRole,
  };
  context.RoleAdminChanged.set(entity);
});

ACLManager.RoleGranted.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };
  context.RoleGranted.set(entity);
});

ACLManager.RoleRevoked.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    role: event.params.role,
    account: event.params.account,
    sender: event.params.sender,
  };
  context.RoleRevoked.set(entity);
}); 