// @ts-nocheck
/*
 * Main Event Handlers Entry Point
 * This file imports all individual handler modules to ensure they are loaded and registered.
 */

// Import all handler modules
import "./handlers/aave/AavePoolHandlers";
import "./handlers/aave/AaveOracleHandlers";
import "./handlers/aave/GHOFlashMinterHandlers";
import "./handlers/aave/AaveMerkleDistributorHandlers";
import "./handlers/aave/EmissionManagerHandlers";
import "./handlers/aave/ACLManagerHandlers";
import "./handlers/aave/PoolConfiguratorHandlers";
import "./handlers/aave/RewardsControllerHandlers";
import "./handlers/aave/PoolAddressesProviderHandlers";
import "./handlers/aave/MiscHandlers";

/*
 * All event handlers are now organized by contract in separate files:
 * 
 * - AavePoolHandlers.ts - All AavePool events (Supply, Borrow, Repay, etc.)
 * - AaveOracleHandlers.ts - Oracle price feed events
 * - GHOFlashMinterHandlers.ts - GHO flash minting events
 * - AaveMerkleDistributorHandlers.ts - Airdrop/distribution events
 * - EmissionManagerHandlers.ts - Emission management events
 * - ACLManagerHandlers.ts - Access control events
 * - PoolConfiguratorHandlers.ts - Pool configuration events
 * - RewardsControllerHandlers.ts - Rewards and incentives events
 * - PoolAddressesProviderHandlers.ts - Address provider events
 * - MiscHandlers.ts - All other contract events (Registry, ProxyAdmin, Bridge, etc.)
 */
