// (Array) -> Array
// Returns an array whose members are the last three members of the
// input array. If the array has less than 3 members returns the array.
function lastThree(arr) {
    if (arr.length < 3) {
        return arr;
    } else {
        return [arr[arr.length - 3], arr[arr.length - 2], arr[arr.length - 1]];
    }
}

// (Array[Number]) -> Number
// Returns the sum of all members of the array.
function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// (Array[Number], Array[Number]) -> Number
// Returns the sum of the longer Array.
// If both Arrays are the same length, returns the sum of both Arrays.
// HINT: Use the sum function you wrote above.
function sumOfLonger(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return sum(arr1);
    } else if (arr1.length < arr2.length) {
        return sum(arr2);
    } else {
        return sum(arr1) + sum(arr2);
    }
}

// (Array, Array) -> Bool
// Returns true if the two arrays are identical (contain the same elements
// in the same order).
function arrayEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
}

// (Array[Number]) -> Array[Number]
// Returns the difference between each cost and the minimum cost.
//
// For example, if our options were [1, 3, 3, 2, 5].
// The minimum cost would be 1, and the differences from that
// minimum would be [0, 2, 2, 1, 4]
function differenceFromMinimum(costs) {
    var min = costs[1];
    for (var i = 0; i < costs.length; i++) {
        if (costs[i] < min) {
            min = costs[x];
        }
    }
    var newCosts = [];
    for (var i = 0; i < costs.length; i++) {
        newCosts.push(costs[i] - min);
    }
    return newCosts;
}

// (String) -> Array[String]
// Returns the hashtags used in the provided tweet.
function hashtags(tweet) {
    var tags = [];
    var hashtag = tweet.split(" ");
    for (var x = 0; x < hashtag.length; x++) {
        if (hashtag[x].startsWith("#")) {
            tags.push(hashtag[x]);
        }
    }
    return tags;
}

// (String) -> Array[String]
// Returns the mentions used in the provided tweet.
// HINT: Can you make a utility function that works for both hashtags
// and mentions?
function mentions(tweet) {
    var tags = [];
    var hashtag = tweet.split(" ");
    for (var x = 0; x < hashtag.length; x++) {
        if (hashtag[x].startsWith("@")) {
            tags.push(hashtag[x]);
        }
    }
    return tags;
}

// (String) -> Array[String, Float, Float]
// Return an inventory item encoded in the provided string.
// An Item is a array of 3 elements:
//     - name
//     - price we paid
//     - price we're charging
// The provided string seperates each of these pieces with a tab.
function parseInventoryString(invStr) {
    var inventory = [];
    var parse = invStr.split("\t");
    for (var words = 0; words < parse.length; words++) {
        if (isNaN(parse[words]) === true) {
            inventory.push(parse[words]);
        } else {
            inventory.push(Number(parse[words]));
        }
    }
    return inventory;
}

exports.lastThree = lastThree;
exports.sum = sum;
exports.sumOfLonger = sumOfLonger;
exports.differenceFromMinimum = differenceFromMinimum;
exports.arrayEquals = arrayEquals;
exports.hashtags = hashtags;
exports.mentions = mentions;
exports.parseInventoryString = parseInventoryString;
