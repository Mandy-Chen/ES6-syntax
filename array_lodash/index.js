var _ = require('lodash');
// let array1=[1,2,3,4];
// console.log(_.chunk(array1,2)); //[ [ 1, 2 ], [ 3, 4 ] ]
// console.log(_.chunk(array1,3));  //[ [ 1, 2, 3 ], [ 4 ] ]
// console.log(array1);  //[ 1, 2, 3, 4 ]

let array = [1, 2, NaN, null, undefined, 0, false, 3, 4];
console.log(_.compact(array));  //[ 1, 2, 3, 4 ]
console.log(array);  //[ 1, 2, NaN, null, undefined, 0, false, 3, 4 ]
