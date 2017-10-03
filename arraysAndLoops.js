function lastThree(l) {}

function sum(l) {}

// Returns the sum of the longer Array.
// If both Arrays are the same length, returns the sum of both Arrays.
function sumOfLonger(l1, l2) {}

// Array[Float] -> Array[Float]
// Returns the difference between each cost and the minimum cost.
//
// For example, if our options were [1, 3, 3, 2, 5].
// The minimum cost would be 1, and the differences from that
// minimum would be [0, 2, 2, 1, 4]
function differenceFromMinimum(l) {}

// Returns the hashtags used in the provided tweet.
function hashtags(tweet) {}

// Returns the mentions used in the provided tweet.
function mentions(tweet) {}

// String -> Item
// Return an inventory item encoded in the provided string.
// An Item is a array of 3 elements:
//     - name
//     - price we paid
//     - price we're charging
// The provided string seperates each of these pieces with a tab.
function parseInventoryString(s) {}

exports.lastThree = lastThree;
exports.sumOfLonger = sumOfLonger;
exports.differenceFromMinimum = differenceFromMinimum;
exports.hashtags = hashtags;
exports.mentions = mentions;
exports.parseInventoryString = parseInventoryString;
