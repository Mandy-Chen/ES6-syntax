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

// let array = [1, 2, 3, 4, 5, 6];
// console.log(_.dropWhile(array, item => item > 0)); //[]
// console.log(_.dropWhile(array, item => item > 3)); //[1, 2, 3, 4, 5, 6]
// console.log(_.dropWhile([6,5,4,3,2,1],item=>item>3)); //[ 3, 2, 1 ]
// console.log(_.dropWhile([3,2,6,4,5,1],item=>item>3)); //[ 3, 2, 6, 4, 5, 1 ]

// let array = [1, 2, 3, 4, 5];
// console.log(_.fill(array, 9, 1, 3)); //[ 1, 9, 9, 4, 5 ]
// console.log(array); //[ 1, 9, 9, 4, 5 ]
// console.log(_.fill(array, 666)); //[ 666, 666, 666, 666, 666 ]
// console.log(array); //[ 666, 666, 666, 666, 666 ]
// console.log(_.fill(array, 777, 3)); //[ 666, 666, 666, 777, 777 ]
// console.log(array); //[ 666, 666, 666, 777, 777 ]

// let array = [1, 2, 3, 4, 5, 3, 2, 5];
// console.log(_.findIndex(array, item => item > 3)); //3
// console.log(_.findIndex(array, item => item > 3, 4)); //4
// console.log(array); //[1,2,3,4,5,3,2,5]

// let array = [1, 2, 3, 4, 5, 3, 2, 5];
// console.log(_.findLastIndex(array, item => item > 3)); //7
// console.log(_.findLastIndex(array, item => item > 3, 4)); //4
// console.log(array); //[1,2,3,4,5,3,2,5]

// let array = [3, 2, 1];
// console.log(_.head(array)); // 3

// let array = [1, 2, 3, 4, [5, 6]]; 
// console.log(_.flatten(array)); //[ 1, 2, 3, 4, 5, 6 ]
// console.log(array);   //[ 1, 2, 3, 4, [ 5, 6 ] ]
// let array1 = [[1, 2], 3, [4, [5, 6]]];
// console.log(_.flatten(array1)); ////[ 1, 2, 3, 4, [ 5, 6 ] ]
// console.log(array1); //[ [ 1, 2 ], 3, [ 4, [ 5, 6 ] ] ]

// let array = [[1, 2], 3, [4, [5, 6]]];
// console.log(_.flattenDeep(array)); //[ 1, 2, 3, 4, 5, 6 ]
// console.log(array); //[[1, 2], 3, [4, [5, 6]]]

// let array = [[1, 2], 3, [4, [5, [6,7]]]];
// console.log(_.flattenDepth(array, 2)); //[ 1, 2, 3, 4, 5, [ 6, 7 ] ]

// let array = [["name", "mandy"], ["age", 18]];
// console.log(_.fromPairs(array)); //{ name: 'mandy', age: 18 }
// console.log(array); //[ [ 'name', 'mandy' ], [ 'age', 18 ] ]

// let array = [1, 2, 3, 2, 4, 3, 1];
// console.log(_.indexOf(array, 2)); //1
// console.log(_.indexOf(array, 2, 2)); //3

// let array = [1, 2, 3, 4];
// console.log(_.initial(array)); //[ 1, 2, 3 ]
// console.log(array); //[ 1, 2, 3, 4 ]

// console.log(_.intersection([1, 2], [2, 3], [4, 2])); //[ 2 ]

// console.log(_.intersectionBy([1.1, 2.2], [2.4, 5.1], Math.floor)); //[2.2]

// console.log(_.intersectionWith([1, 2], [2, 4], _.isEqual)); //[2]

// let array = [1, 2, 3, 4];
// console.log(_.join(array, "*")); //1*2*3*4
// console.log(array); //[ 1, 2, 3, 4 ]

// let array = [3, 2, 1];
// console.log(_.last(array)); //1

// let array = [2, 1, 3, 2, 5, 3];
// console.log(_.lastIndexOf(array, 2)); //3
// console.log(_.lastIndexOf(array, 2, 1)); //0

// let array = [1, 2, 3, 4, 5];
// console.log(_.nth(array, 3)); // 4
// console.log(_.nth(array, -4));  // 2

// let array = [1, 2, 3, 4, 2, 3];
// console.log(_.pull(array, 1, 3)); //[ 2, 4, 2 ]
// console.log(array); //[ 2, 4, 2 ]

// let array = [1, 2, 2, 3, 1, 3, 2];
// console.log(_.pullAll(array, [2, 3])); //[ 1, 1 ]
// console.log(array); //[ 1, 1 ]

// let array = [1, 2, 4, 3, 2, 3, 1]; 
// console.log(_.pullAllBy(array, [1, 2], item => item > 3));  //[ 4 ]
// console.log(array); //[ 4 ]

// let array = [1, 2, 3, 1, 1, 4, 2, 6];
// console.log(_.pullAllWith(array, [1], _.isEqual)); //[ 2, 3, 4, 2, 6 ]
// console.log(array); //[ 2, 3, 4, 2, 6 ]

// let array = [1, 2, 3, 4];
// console.log(_.pullAt(array, 1, 3));  //[ 2, 4 ]
// console.log(array);   //[ 1, 3 ]

// let array = [1, 2, 3, 4];
// console.log(_.remove(array, item => item > 2)); //[ 3, 4 ]
// console.log(array); //[ 1, 2 ]

// let array = [1, 2, 3, 4];
// console.log(_.reverse(array)); //[ 4, 3, 2, 1 ]
// console.log(array); //[ 4, 3, 2, 1 ]

// let array = [1, 2, 3, 4, 5, 6];
// console.log(_.slice(array, 3, 4)); //[ 4 ]
// console.log(array); //[ 1, 2, 3, 4, 5, 6 ]

// let array = [1, 2, 4];
// console.log(_.sortedIndex(array, 3)); //2
// console.log(_.sortedIndex(array, 2)); //1
// console.log(array); //[ 1, 2, 4 ]

// let array = [1, 2, 3, 4, 6, 8];
// console.log(_.sortedIndexBy(array, 5, item => item > 1));//1
// console.log(_.sortedIndexBy(array, 5, item => item > 2));//2
// console.log(_.sortedIndexBy(array, 5, item => item > 3));//3

// console.log(_.sortedIndexOf([2, 1, 4, 3], 1)); //-1
// console.log(_.sortedIndexOf([1, 2, 3, 4], 1)); //0

// let array = [1, 2, 2, 2, 3, 4];
// console.log(_.sortedLastIndex(array, 2)); //4

// let array = [1, 2, 3, 3, 3, 4, 5];
// console.log(_.sortedIndexBy(array, 3, item => item > 1)); //1
// console.log(_.sortedIndexBy(array, 3, item => item > 2)); //2
// console.log(_.sortedIndexBy(array, 3, item => item > 3)); //0

let array = [1, 2, 3, 3, 3, 4, 5];
console.log(_.sortedLastIndexOf(array, 3));
