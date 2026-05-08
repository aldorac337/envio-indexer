import assert from "assert";
import { 
  TestHelpers,
  BackUnbacked
} from "generated";
const { MockDb, AavePool } = TestHelpers;

describe("AavePool contract BackUnbacked event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for AavePool contract BackUnbacked event
  const event = AavePool.BackUnbacked.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("BackUnbacked is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await AavePool.BackUnbacked.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualBackUnbacked = mockDbUpdated.entities.BackUnbacked.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Expected entity
    const expectedBackUnbacked: BackUnbacked = {
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

    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualBackUnbacked, expectedBackUnbacked, "Actual BackUnbacked should be the same as the expectedBackUnbacked");
  });
});
