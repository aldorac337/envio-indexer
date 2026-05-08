# Aave V3 Core Indexer

A comprehensive blockchain indexer for Aave V3 protocol built with [Envio](https://envio.dev). This indexer tracks all major events across Aave V3 deployments on Ethereum and Binance Smart Chain, providing real-time data indexing for lending, borrowing, liquidations, rewards, and governance activities.

## 🚀 Features

### Multi-Chain Support
- **Ethereum Mainnet** (Chain ID: 1) - Starting from block 16,291,127
- **Binance Smart Chain** (Chain ID: 56) - Starting from block 33,571,625
- **Polygon & Avalanche** - Configured but commented out (ready for activation)

### Comprehensive Event Coverage

#### Core Lending Protocol Events
- **Supply/Withdraw** - User deposits and withdrawals
- **Borrow/Repay** - Loan origination and repayment
- **Liquidation** - Underwater position liquidations
- **Flash Loans** - Flash loan transactions
- **Reserve Management** - Reserve data updates and collateral changes
- **Interest Rates** - Real-time APY/APR calculations for supply and borrow rates

#### Governance & Configuration
- **Pool Configuration** - Asset parameters, caps, and risk settings
- **Access Control** - Role management and permissions
- **Address Provider** - Contract address updates and registrations
- **Oracle Updates** - Price feed source changes

#### Rewards & Incentives
- **Rewards Controller** - Emission rates, user rewards, and claim events
- **Emission Manager** - Reward distribution management
- **Merkle Distributor** - Airdrop and distribution events

#### Advanced Features
- **GHO Flash Minting** - GHO stablecoin flash mint events
- **Bridge Operations** - Cross-chain bridge transactions
- **ParaSwap Integration** - DEX swap and liquidity events
- **Risk Management** - Freeze steward and cap management

## 📊 Indexed Data

The indexer captures detailed event data including:
- Transaction metadata (hash, block number, timestamp)
- User addresses and amounts
- Asset addresses and token information
- Interest rates and protocol parameters
- **Calculated APY/APR** - Real-time interest rate calculations for supply and borrow positions
- Cross-chain identifiers for multi-chain support

## 🛠️ Technology Stack

- **Envio Framework** v2.24.0 - Blockchain indexing engine
- **TypeScript** v5.2.2 - Type-safe development
- **GraphQL** - Query interface for indexed data
- **PostgreSQL** - Data storage with CDC (Change Data Capture)
- **Docker** - Containerized deployment

## 📋 Prerequisites

- [Node.js](https://nodejs.org/en/download/current) (v18 or newer)
- [pnpm](https://pnpm.io/installation) (v8 or newer)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Generate TypeScript Types
```bash
pnpm codegen
```

### 3. Start Development Server
```bash
pnpm dev
```

### 4. Access GraphQL Playground
Visit [http://localhost:8080](http://localhost:8080) to explore the indexed data.

**Default credentials:**
- Username: `testing`
- Password: `testing`

## 📁 Project Structure

```
aave-eth-core/
├── abi/                    # Contract ABIs for all indexed contracts
├── config.yaml            # Envio configuration with contracts and networks
├── schema.graphql         # GraphQL schema defining indexed entities (includes InterestRate type)
├── src/
│   ├── EventHandlers.ts   # Main event handler entry point
│   └── handlers/          # Organized event handlers by contract
│       ├── AavePoolHandlers.ts
│       ├── AaveOracleHandlers.ts
│       ├── PoolConfiguratorHandlers.ts
│       ├── RewardsControllerHandlers.ts
│       └── ...            # Additional contract handlers
├── generated/             # Auto-generated files from Envio
└── test/                 # Test files
```

## 🔧 Configuration

### Interest Rate Calculations

The indexer automatically calculates APY and APR values from Aave's raw interest rates using the following methodology:

- **APR (Annual Percentage Rate)**: Simple annual rate calculated as `rate * 100`
- **APY (Annual Percentage Yield)**: Compounded annual rate using continuous compounding formula
- **Rate Conversion**: Converts Aave's ray units (1e27) to decimal values for accurate calculations

The `InterestRate` entity is automatically created whenever a `ReserveDataUpdated` event is processed, providing real-time interest rate data for all Aave reserves.

### Adding New Networks
To add support for additional networks (e.g., Polygon, Avalanche), uncomment the relevant sections in `config.yaml`:

```yaml
networks:
  - id: 137  # Polygon
    start_block: 25231000
    contracts:
      - name: AavePool
        address:
          - 0x794a61358D6845594F94dc1DB02A252b5b4814aD
```

### Adding New Contracts
To index additional contracts, add them to the `contracts` section in `config.yaml`:

```yaml
contracts:
  - name: NewContract
    handler: src/EventHandlers.ts
    events:
      - event: EventName(address indexed param1, uint256 param2)
```

## 📈 Available Scripts

- `pnpm dev` - Start development server
- `pnpm start` - Start production server
- `pnpm codegen` - Generate TypeScript types from config
- `pnpm test` - Run test suite
- `pnpm build` - Build TypeScript code

## 🔍 Query Examples

### Get Recent Supply Events
```graphql
query RecentSupplies {
  supplies(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
    id
    user
    reserve
    amount
    blockTimestamp
  }
}
```

### Get User's Borrowing Activity
```graphql
query UserBorrows($user: String!) {
  borrows(where: { user: $user }) {
    id
    reserve
    amount
    interestRateMode
    borrowRate
    blockTimestamp
  }
}
```

### Get Liquidation Events
```graphql
query Liquidations {
  liquidationCalls(first: 20, orderBy: blockTimestamp, orderDirection: desc) {
    id
    collateralAsset
    debtAsset
    user
    debtToCover
    liquidatedCollateralAmount
    liquidator
  }
}
```

### Get Interest Rate Data
```graphql
query InterestRates($reserve: String!) {
  interestRates(
    where: { reserve: $reserve }
    first: 10
    orderBy: blockTimestamp
    orderDirection: desc
  ) {
    id
    reserve
    supplyAPY
    supplyAPR
    stableBorrowAPY
    stableBorrowAPR
    variableBorrowAPY
    variableBorrowAPR
    blockTimestamp
  }
}
```

### Get Latest Interest Rates for All Reserves
```graphql
query LatestInterestRates {
  interestRates(
    orderBy: blockTimestamp
    orderDirection: desc
    first: 50
  ) {
    id
    reserve
    supplyAPY
    variableBorrowAPY
    stableBorrowAPY
    blockTimestamp
  }
}
```

## 🌐 Supported Networks

| Network | Chain ID | Status | Start Block |
|---------|----------|--------|-------------|
| Ethereum | 1 | ✅ Active | 16,291,127 |
| BSC | 56 | ✅ Active | 33,571,625 |
| Polygon | 137 | 🔧 Ready | 25,231,000 |
| Avalanche | 43114 | 🔧 Ready | 12,000,000 |

## 📚 Documentation

For detailed information about Envio features and capabilities, visit the [official documentation](https://docs.envio.dev).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using [Envio](https://envio.dev)**
