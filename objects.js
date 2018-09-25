// (Array) -> Object
// Takes an array and returns and object where each key is the index of the
// array and each value is the value.
// Example: [1, 2, 3] -> { "0": 1, "1": 2, "2": 3 }
function arrayToObject(arr) {
    var obj = {};
    for (var x = 0; x < arr.length; x++) {
        obj[String(x)] = arr[x];
    }
    return obj;
}

// (String) -> Object
// Return a dictionary of  inventory items encoded in the provided string.
// An Item is an object with 3 keys:
//     - 'name'
//     - 'paid' - price we paid
//     - 'charging' - price we're charging
// The provided string seperates each item with a newline and each piece of an
// item with a tab.
function readInventory(inventoryStr) {
    if (inventoryStr === "") {
        return {};
    }
    var item = {};
    var items = inventoryStr.split("\n");
    for (var x = 0; x < items.length; x++) {
        var info = items[x].split("\t");
        item[info[0]] = {
            charging: Number(info[2]),
            name: info[0],
            paid: Number(info[1])
        };
    }
    return item;
}

// (Object) -> Bool
// Takes input in the same format as the output of "readInventory" and returns
// true if there are no items that cost more than $1.
function isDollarStore(inventory) {
    for (var item of Object.keys(inventory)) {
        if (inventory[item].price > 1) {
            return false;
        }
    }
    return true;
}

class Movie {
    constructor(title, director, genre, cast) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.cast = cast;
    }

    toString() {
        var string = `Title: ${this.title}
Director: ${this.director}
Genre: ${this.genre}
Cast:
`;
        for (var m = 0; m < this.cast.length; m++) {
            if (m < this.cast.length - 1) {
                string += "- " + this.cast[m] + "\n";
            } else {
                string += "- " + this.cast[m];
            }
        }
        return string;
    }

    equals(otherMovie) {
        if (this.title !== otherMovie.title) {
            return false;
        } else if (this.director !== otherMovie.director) {
            return false;
        } else if (this.genre !== otherMovie.genre) {
            return false;
        } else if (this.cast.length === otherMovie.cast.length) {
            for (var m = 0; m < otherMovie.length; m++) {
                if (this.cast[m] != otherMovie[m]) {
                    return false;
                }
            }
            return true;
        }
    }
}
// building up an array, going to loop over the movies. if the movie features the cast member you are looking for add to the result aray
class FMDB {
    constructor(movies) {
        this.movies = movies;
    }
    moviesByCastMember(castMembers) {
        var matching = [];
        for (var m = 0; m < this.movies.length; m++) {
            if (this.movies[m].cast.includes(castMembers)) {
                matching.push(this.movies[m]);
            }
        }
        return matching;
    }
    moviesByDirector(director) {
        var matching = [];
        for (var m = 0; m < this.movies.length; m++) {
            if (this.movies[m].director.includes(director)) {
                matching.push(this.movies[m]);
            }
        }
        return matching;
    }
}

exports.arrayToObject = arrayToObject;
exports.readInventory = readInventory;
exports.isDollarStore = isDollarStore;
exports.Movie = Movie;
exports.FMDB = FMDB;
