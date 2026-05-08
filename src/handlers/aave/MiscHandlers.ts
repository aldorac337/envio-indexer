// @ts-nocheck
/*
 * Miscellaneous Contract Event Handlers
 */
import { 
  ManualAGRS, 
  PoolAddressesProviderRegistry, 
  ProxyAdmin, 
  ProxyAdminLong, 
  AavePolEthBridge, 
  WrappedTokenGatewayV3, 
  ParaSwapRepayAdapter, 
  ParaSwapLiquiditySwapAdapter, 
  FreezeSteward, 
  Collector, 
  CapPlusRiskSteward 
} from "generated";

// ManualAGRS event handlers
ManualAGRS.AdminChanged.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };
  context.AdminChanged.set(entity);
});

ManualAGRS.Upgraded.handler(async ({ event, context }) => {
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

// PoolAddressesProviderRegistry event handlers
PoolAddressesProviderRegistry.AddressesProviderRegistered.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    newAddress: event.params.newAddress,
  };
  context.AddressesProviderRegistered.set(entity);
});

PoolAddressesProviderRegistry.AddressesProviderUnregistered.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    newAddress: event.params.newAddress,
  };
  context.AddressesProviderUnregistered.set(entity);
});

PoolAddressesProviderRegistry.OwnershipTransferred.handler(async ({ event, context }) => {
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

// ProxyAdmin event handlers
ProxyAdmin.OwnershipTransferred.handler(async ({ event, context }) => {
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

// ProxyAdminLong event handlers
ProxyAdminLong.OwnershipTransferred.handler(async ({ event, context }) => {
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

// AavePolEthBridge event handlers
AavePolEthBridge.Bridge.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    token: event.params.token,
    amount: event.params.amount,
  };
  context.Bridge.set(entity);
});

AavePolEthBridge.ERC20Rescued.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    token: event.params.token,
    to: event.params.to,
    amount: event.params.amount,
  };
  context.ERC20Rescued.set(entity);
});

AavePolEthBridge.EthereumGovernanceExecutorUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    newEthereumGovernanceExecutor: event.params.newEthereumGovernanceExecutor,
  };
  context.EthereumGovernanceExecutorUpdated.set(entity);
});

AavePolEthBridge.FxChildUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    newFxChild: event.params.newFxChild,
  };
  context.FxChildUpdated.set(entity);
});

AavePolEthBridge.FxRootUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    newFxRoot: event.params.newFxRoot,
  };
  context.FxRootUpdated.set(entity);
});

// WrappedTokenGatewayV3 event handlers
WrappedTokenGatewayV3.EmergencyTokenTransfer.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    token: event.params.token,
    to: event.params.to,
    amount: event.params.amount,
  };
  context.EmergencyTokenTransfer.set(entity);
});

WrappedTokenGatewayV3.EmergencyEtherTransfer.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    to: event.params.to,
    amount: event.params.amount,
  };
  context.EmergencyEtherTransfer.set(entity);
});

// ParaSwapRepayAdapter event handlers
ParaSwapRepayAdapter.Swapped.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    fromAsset: event.params.fromAsset,
    toAsset: event.params.toAsset,
    fromAmount: event.params.fromAmount,
    receivedAmount: event.params.receivedAmount,
  };
  context.Swapped.set(entity);
});

ParaSwapRepayAdapter.Bought.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    fromAsset: event.params.fromAsset,
    toAsset: event.params.toAsset,
    amountSold: event.params.amountSold,
    receivedAmount: event.params.receivedAmount,
  };
  context.Bought.set(entity);
});

// ParaSwapLiquiditySwapAdapter event handlers
ParaSwapLiquiditySwapAdapter.Swapped.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    fromAsset: event.params.fromAsset,
    toAsset: event.params.toAsset,
    fromAmount: event.params.fromAmount,
    receivedAmount: event.params.receivedAmount,
  };
  context.Swapped.set(entity);
});

ParaSwapLiquiditySwapAdapter.Bought.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    fromAsset: event.params.fromAsset,
    toAsset: event.params.toAsset,
    amountSold: event.params.amountSold,
    receivedAmount: event.params.receivedAmount,
  };
  context.Bought.set(entity);
});

// FreezeSteward event handlers
FreezeSteward.ReserveFrozen.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    frozen: event.params.frozen,
  };
  context.ReserveFrozen.set(entity);
});

// Collector event handlers
Collector.AdminChanged.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };
  context.AdminChanged.set(entity);
});

Collector.Upgraded.handler(async ({ event, context }) => {
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

Collector.ETHTransferred.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    to: event.params.to,
    amount: event.params.amount,
  };
  context.ETHTransferred.set(entity);
});

Collector.ERC20Transferred.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    token: event.params.token,
    to: event.params.to,
    amount: event.params.amount,
  };
  context.ERC20Transferred.set(entity);
});

Collector.FundsAdminChanged.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    newFundsAdmin: event.params.newFundsAdmin,
  };
  context.FundsAdminChanged.set(entity);
});

Collector.NewRewardsVault.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    newRewardsVault: event.params.newRewardsVault,
  };
  context.NewRewardsVault.set(entity);
});

// CapPlusRiskSteward event handlers
CapPlusRiskSteward.RiskParamsUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    ltv: event.params.ltv,
    liquidationThreshold: event.params.liquidationThreshold,
    liquidationBonus: event.params.liquidationBonus,
  };
  context.RiskParamsUpdated.set(entity);
});

CapPlusRiskSteward.CapsUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    supplyCap: event.params.supplyCap,
    borrowCap: event.params.borrowCap,
  };
  context.CapsUpdated.set(entity);
}); 