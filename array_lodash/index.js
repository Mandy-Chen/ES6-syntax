var _ = require('lodash');
// let array1=[1,2,3,4];
// console.log(_.chunk(array1,2)); //[ [ 1, 2 ], [ 3, 4 ] ]
// console.log(_.chunk(array1,3));  //[ [ 1, 2, 3 ], [ 4 ] ]
// console.log(array1);  //[ 1, 2, 3, 4 ]

// let array = [1, 2, NaN, null, undefined, 0, false, 3, 4];
// console.log(_.compact(array));  //[ 1, 2, 3, 4 ]
// console.log(array);  //[ 1, 2, NaN, null, undefined, 0, false, 3, 4 ]

// let array = [1, 2, 3];
// console.log(_.concat(array, 4, [5], [[6]])); //[ 1, 2, 3, 4, 5, [ 6 ] ]
// console.log(array); //[ 1, 2, 3 ]

// let array = [1, 2, 3];
// console.log(_.difference(array, [1])); //[ 2, 3 ]
// console.log(_.difference(array, [1, 2, 3, 4])); //[]
// console.log(array); //[ 1, 2, 3 ]

// let array = [2.1, 3.3, 4.5, 7.3];
// console.log(_.differenceBy(array, [4.3, 5, 3, 7.9], Math.floor)); //[ 2.1 ]
// console.log(array); //[ 2.1, 3.3, 4.5, 7.3 ]

// let array = [[1, 2], [3, 4], [5, 6]];
// console.log(_.differenceWith(array, [[3, 4]], _.isEqual)); //[ [ 1, 2 ], [ 5, 6 ] ]
// console.log(array); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

// let array = [1, 2, 3, 4, 5];
// console.log(_.drop(array, 0)); //[ 1, 2, 3, 4, 5 ]
// console.log(array);  //[ 1, 2, 3, 4, 5 ]
// console.log(_.drop(array, 2)); //[ 3, 4, 5 ]
// console.log(array); //[ 1, 2, 3, 4, 5 ]
// console.log(_.drop(array, 9)); //[]
// console.log(array); //[ 1, 2, 3, 4, 5 ]

// let array = [1, 2, 3, 4, 5];
// console.log(_.dropRight(array)); //[ 1, 2, 3, 4 ]
// console.log(array); //[ 1, 2, 3, 4, 5 ]
// console.log(_.dropRight(array, 0)); //[ 1, 2, 3, 4, 5 ]
// console.log(array); //[ 1, 2, 3, 4, 5 ]
// console.log(_.dropRight(array, 3)); //[ 1, 2 ]
// console.log(array); //[ 1, 2, 3, 4, 5 ]
// console.log(_.dropRight(array, 9)); //[]
// console.log(array); //[ 1, 2, 3, 4, 5 ]

// let array = [1, 2, 3, 4, 5, 6];
// console.log(_.dropRightWhile(array,item=>item>3)); //[ 1, 2, 3 ]
// console.log(array); //[ 1, 2, 3, 4, 5, 6 ]

let array = [1, 2, 3, 4, 5, 6];
console.log(_.dropWhile(array, item => item > 0)); //[]
console.log(_.dropWhile(array, item => item > 3)); //[1, 2, 3, 4, 5, 6]
console.log(_.dropWhile([6,5,4,3,2,1],item=>item>3)); //[ 3, 2, 1 ]
console.log(_.dropWhile([3,2,6,4,5,1],item=>item>3)); //[ 3, 2, 6, 4, 5, 1 ]
