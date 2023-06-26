const crypto = require("crypto");
const deterministicPartitionKey = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("returns TRIVIAL_PARTITION_KEY when event is undefined", () => {
    const result = deterministicPartitionKey(undefined);
    expect(result).toBe("0");
  });

  it("returns the partitionKey if it exists in the event", () => {
    const event = { partitionKey: "customKey" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("customKey");
  });

  it("hashes the event data and returns the hash if partitionKey is not provided", () => {
    const event = { data: { id: 1, name: "John" } };
    const result = deterministicPartitionKey(event);
    const isHashValid = /^[a-f0-9]{128}$/.test(result);
    expect(isHashValid).toBe(true);
  });

  it("returns the TRIVIAL_PARTITION_KEY when given no input", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });
});

