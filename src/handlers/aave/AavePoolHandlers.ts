// @ts-nocheck
/*
 * AavePool Event Handlers
 */
import { AavePool } from "generated";

AavePool.BackUnbacked.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reserve: event.params.reserve,
    backer: event.params.backer,
    amount: event.params.amount,
    fee: event.params.fee,
  };
  context.BackUnbacked.set(entity);
});

AavePool.Borrow.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reserve: event.params.reserve,
    user: event.params.user,
    onBehalfOf: event.params.onBehalfOf,
    amount: event.params.amount,
    interestRateMode: event.params.interestRateMode,
    borrowRate: event.params.borrowRate,
    referralCode: event.params.referralCode,
  };
  context.Borrow.set(entity);
});

AavePool.DeficitCovered.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reserve: event.params.reserve,
    caller: event.params.caller,
    amountCovered: event.params.amountCovered,
  };
  context.DeficitCovered.set(entity);
});

AavePool.DeficitCreated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    user: event.params.user,
    debtAsset: event.params.debtAsset,
    amountCreated: event.params.amountCreated,
  };
  context.DeficitCreated.set(entity);
});

AavePool.FlashLoan.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    target: event.params.target,
    initiator: event.params.initiator,
    asset: event.params.asset,
    amount: event.params.amount,
    interestRateMode: event.params.interestRateMode,
    premium: event.params.premium,
    referralCode: event.params.referralCode,
  };
  context.FlashLoan.set(entity);
});

AavePool.LiquidationCall.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    collateralAsset: event.params.collateralAsset,
    debtAsset: event.params.debtAsset,
    user: event.params.user,
    debtToCover: event.params.debtToCover,
    liquidatedCollateralAmount: event.params.liquidatedCollateralAmount,
    liquidator: event.params.liquidator,
    receiveAToken: event.params.receiveAToken,
  };
  context.LiquidationCall.set(entity);
});

AavePool.MintUnbacked.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reserve: event.params.reserve,
    user: event.params.user,
    onBehalfOf: event.params.onBehalfOf,
    amount: event.params.amount,
    referralCode: event.params.referralCode,
  };
  context.MintUnbacked.set(entity);
});

AavePool.MintedToTreasury.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reserve: event.params.reserve,
    amountMinted: event.params.amountMinted,
  };
  context.MintedToTreasury.set(entity);
});

AavePool.Repay.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reserve: event.params.reserve,
    user: event.params.user,
    repayer: event.params.repayer,
    amount: event.params.amount,
    useATokens: event.params.useATokens,
  };
  context.Repay.set(entity);
});

AavePool.ReserveDataUpdated.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reserve: event.params.reserve,
    liquidityRate: event.params.liquidityRate,
    stableBorrowRate: event.params.stableBorrowRate,
    variableBorrowRate: event.params.variableBorrowRate,
    liquidityIndex: event.params.liquidityIndex,
    variableBorrowIndex: event.params.variableBorrowIndex,
  };
  context.ReserveDataUpdated.set(entity);

  // Calculate APY and APR from the rates
  const RAY = 1e27;
  const SECONDS_PER_YEAR = 31_536_000; // 365 days

  // Convert ray string to decimal number
  function rayToDecimal(rayStr: string): number {
    return Number(rayStr) / RAY;
  }

  // Calculate APY from per-second rate (continuous compounding)
  function calculateAPY(rateDecimal: number): number {
    return Math.pow(1 + rateDecimal / SECONDS_PER_YEAR, SECONDS_PER_YEAR) - 1;
  }

  // Convert raw rates to decimals
  const liquidityRate = rayToDecimal(event.params.liquidityRate.toString());
  const stableBorrowRate = rayToDecimal(event.params.stableBorrowRate.toString());
  const variableBorrowRate = rayToDecimal(event.params.variableBorrowRate.toString());

  // Calculate APR (simple, non-compounded)
  const supplyAPR = liquidityRate * 100;
  const stableBorrowAPR = stableBorrowRate * 100;
  const variableBorrowAPR = variableBorrowRate * 100;

  // Calculate APY (compounded annually)
  const supplyAPY = calculateAPY(liquidityRate) * 100;
  const stableBorrowAPY = calculateAPY(stableBorrowRate) * 100;
  const variableBorrowAPY = calculateAPY(variableBorrowRate) * 100;

  // Create InterestRate entity
  const interestRateEntity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}_interest_rate`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reserve: event.params.reserve,
    supplyAPY: supplyAPY,
    supplyAPR: supplyAPR,
    stableBorrowAPY: stableBorrowAPY,
    stableBorrowAPR: stableBorrowAPR,
    variableBorrowAPY: variableBorrowAPY,
    variableBorrowAPR: variableBorrowAPR,
    liquidityRate: event.params.liquidityRate,
    stableBorrowRate: event.params.stableBorrowRate,
    variableBorrowRate: event.params.variableBorrowRate,
  };
  context.InterestRate.set(interestRateEntity);
});

AavePool.ReserveUsedAsCollateralDisabled.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reserve: event.params.reserve,
    user: event.params.user,
  };
  context.ReserveUsedAsCollateralDisabled.set(entity);
});

AavePool.ReserveUsedAsCollateralEnabled.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reserve: event.params.reserve,
    user: event.params.user,
  };
  context.ReserveUsedAsCollateralEnabled.set(entity);
});

AavePool.Supply.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reserve: event.params.reserve,
    user: event.params.user,
    onBehalfOf: event.params.onBehalfOf,
    amount: event.params.amount,
    referralCode: event.params.referralCode,
  };
  context.Supply.set(entity);
});

AavePool.Upgraded.handler(async ({ event, context }) => {
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

AavePool.UserEModeSet.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    user: event.params.user,
    categoryId: event.params.categoryId,
  };
  context.UserEModeSet.set(entity);
});

AavePool.Withdraw.handler(async ({ event, context }) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    chainId: BigInt(event.chainId),
    blockNumber: BigInt(event.block.number),
    blockTimestamp: BigInt(event.block.timestamp),
    transactionHash: event.srcAddress,
    reserve: event.params.reserve,
    user: event.params.user,
    to: event.params.to,
    amount: event.params.amount,
  };
  context.Withdraw.set(entity);
}); 