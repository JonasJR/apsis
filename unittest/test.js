var bowling = require('../controller/bowling');

/**
 * Tests that can be run by calling npm test
 */
obj1 = [{"first":0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}];
var test1 = bowling.calculateScore(obj1);
obj2 = [{"first":10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": 10, "third": 10}];
var test2 = bowling.calculateScore(obj2);
obj3 = [{"first": 9, "second": 1, "third": ""}, {"first": 9, "second": 1, "third": ""}, {"first": 9, "second": 1, "third": ""}, {"first": 9, "second": 1, "third": ""}, {"first": 9, "second": 1, "third": ""}, {"first": 9, "second": 1, "third": ""}, {"first": 9, "second": 1, "third": ""}, {"first": 9, "second": 1, "third": ""}, {"first": 9, "second": 1, "third": ""}, {"first": 9, "second": 1, "third": 9}];
var test3 = bowling.calculateScore(obj3);
obj4 = [{"first":0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 10, "second": 0, "third": ""}, {"first": 1, "second": 0, "third": ""}];
var test4 = bowling.calculateScore(obj4);
obj5 = [{"first":0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 0, "second": 0, "third": ""}, {"first": 10, "second": 1, "third": 0}];
var test5 = bowling.calculateScore(obj5);
obj6 = [{"first":10, "second": "", "third": ""}, {"first": 3, "second": 1, "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": "", "third": ""}, {"first": 10, "second": 10, "third": 10}];
var test6 = bowling.calculateScore(obj6);

console.log("Test1:", test1, "expected:", 0, test1.score === 0 ? "PASSED!" : "FAILED!" );
console.log("Test2:", test2, "expected:", 300, test2.score === 300 ? "PASSED!" : "FAILED!" );
console.log("Test3:", test3, "expected:", 190, test3.score === 190 ? "PASSED!" : "FAILED!" );
console.log("Test4:", test4, "expected:", 12, test4.score === 12 ? "PASSED!" : "FAILED!" );
console.log("Test5:", test5, "expected:", 11, test5.score === 11 ? "PASSED!" : "FAILED!" );
console.log("Test6:", test6, "expected:", 258, test6.score === 258 ? "PASSED!" : "FAILED!" );