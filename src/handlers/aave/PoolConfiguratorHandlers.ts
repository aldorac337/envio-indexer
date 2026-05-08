// @ts-nocheck
/*
 * PoolConfigurator Event Handlers
 */
import { PoolConfigurator } from "generated";

PoolConfigurator.ATokenUpgraded.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    proxy: event.params.proxy,
    implementation: event.params.implementation,
  };
  context.ATokenUpgraded.set(entity);
});

PoolConfigurator.BorrowCapChanged.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    oldBorrowCap: event.params.oldBorrowCap,
    newBorrowCap: event.params.newBorrowCap,
  };
  context.BorrowCapChanged.set(entity);
});

PoolConfigurator.BorrowableInIsolationChanged.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    borrowable: event.params.borrowable,
  };
  context.BorrowableInIsolationChanged.set(entity);
});

PoolConfigurator.BridgeProtocolFeeUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    oldBridgeProtocolFee: event.params.oldBridgeProtocolFee,
    newBridgeProtocolFee: event.params.newBridgeProtocolFee,
  };
  context.BridgeProtocolFeeUpdated.set(entity);
});

PoolConfigurator.CollateralConfigurationChanged.handler(async ({ event, context }) => {
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
  context.CollateralConfigurationChanged.set(entity);
});

PoolConfigurator.DebtCeilingChanged.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    oldDebtCeiling: event.params.oldDebtCeiling,
    newDebtCeiling: event.params.newDebtCeiling,
  };
  context.DebtCeilingChanged.set(entity);
});

PoolConfigurator.ReserveActive.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    active: event.params.active,
  };
  context.ReserveActive.set(entity);
});

PoolConfigurator.ReserveBorrowing.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    enabled: event.params.enabled,
  };
  context.ReserveBorrowing.set(entity);
});

PoolConfigurator.ReserveDropped.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
  };
  context.ReserveDropped.set(entity);
});

PoolConfigurator.ReserveFactorChanged.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    oldReserveFactor: event.params.oldReserveFactor,
    newReserveFactor: event.params.newReserveFactor,
  };
  context.ReserveFactorChanged.set(entity);
});

PoolConfigurator.ReserveFrozen.handler(async ({ event, context }) => {
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

PoolConfigurator.ReserveInitialized.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    aToken: event.params.aToken,
    stableDebtToken: event.params.stableDebtToken,
    variableDebtToken: event.params.variableDebtToken,
    interestRateStrategyAddress: event.params.interestRateStrategyAddress,
  };
  context.ReserveInitialized.set(entity);
});

PoolConfigurator.ReserveInterestRateStrategyChanged.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    oldStrategy: event.params.oldStrategy,
    newStrategy: event.params.newStrategy,
  };
  context.ReserveInterestRateStrategyChanged.set(entity);
});

PoolConfigurator.ReservePaused.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    paused: event.params.paused,
  };
  context.ReservePaused.set(entity);
});

PoolConfigurator.ReserveStableRateBorrowing.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    enabled: event.params.enabled,
  };
  context.ReserveStableRateBorrowing.set(entity);
});

PoolConfigurator.SiloedBorrowingChanged.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    oldState: event.params.oldState,
    newState: event.params.newState,
  };
  context.SiloedBorrowingChanged.set(entity);
});

PoolConfigurator.StableDebtTokenUpgraded.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    proxy: event.params.proxy,
    implementation: event.params.implementation,
  };
  context.StableDebtTokenUpgraded.set(entity);
});

PoolConfigurator.SupplyCapChanged.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    oldSupplyCap: event.params.oldSupplyCap,
    newSupplyCap: event.params.newSupplyCap,
  };
  context.SupplyCapChanged.set(entity);
});

PoolConfigurator.UnbackedMintCapChanged.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    oldUnbackedMintCap: event.params.oldUnbackedMintCap,
    newUnbackedMintCap: event.params.newUnbackedMintCap,
  };
  context.UnbackedMintCapChanged.set(entity);
});

PoolConfigurator.Upgraded.handler(async ({ event, context }) => {
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

PoolConfigurator.VariableDebtTokenUpgraded.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    asset: event.params.asset,
    proxy: event.params.proxy,
    implementation: event.params.implementation,
  };
  context.VariableDebtTokenUpgraded.set(entity);
}); 