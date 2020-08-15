var _ = require('lodash');
var array = require('lodash/array');
let array1=[1,2,3,4];
console.log(_.chunk(array1,2)); //[ [ 1, 2 ], [ 3, 4 ] ]
console.log(_.chunk(array1,3));  //[ [ 1, 2, 3 ], [ 4 ] ]
console.log(array1);  //[ 1, 2, 3, 4 ]
