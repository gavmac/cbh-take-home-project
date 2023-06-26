const crypto = require("crypto");

function deterministicPartitionKey(event) {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (event === undefined) {
    return TRIVIAL_PARTITION_KEY;
  }

  let candidate = determineCandidate(event);

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = hashCandidate(candidate);
  }

  return candidate;
}

function determineCandidate(event) {
  if (event && event.partitionKey) {
    return event.partitionKey;
  }

  const data = JSON.stringify(event);
  return hashData(data);
}

function hashCandidate(candidate) {
  return hashData(candidate);
}

function hashData(data) {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

module.exports = deterministicPartitionKey;




