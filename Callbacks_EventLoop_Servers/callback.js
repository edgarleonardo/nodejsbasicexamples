/// Evaluate whether a number is odd or not
var maxNumber = 100;

var evenDoubler = function(v, callback) {
    if ((v%2) === 0) {
            callback(null, 'Even Input');
    } else {
            callback(new Error("Odd Input"));
    }
};
var count = 0;

for (var i = 1; i<maxNumber; i++) {
    console.log("Calling evenDoubler for value: " + i);
    evenDoubler(i, function(err, results) {
        if (err) {
            console.log("ERROR: " + err.message);
        } else {
            console.log("The result is an " + results);
        }
        if (++count === maxNumber) {
            console.log("Finished!");
        }
    });
};

console.log("-----");