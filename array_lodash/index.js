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

// let array = [1, 2, 3, 3, 3, 4, 5];
// console.log(_.sortedLastIndexOf(array, 3)); //4

// let array = [1, 3, 1, 2, 4, 3, 5];
// console.log(_.sortedUniq(array)); // [1,3,1,2,4,3,5]
// console.log(array); //[1, 3, 1, 2, 4, 3, 5]
// let array1 = [1, 1, 2, 2, 3, 4, 5];
// console.log(_.sortedUniq(array1)); //[ 1, 2, 3, 4, 5 ]
// console.log(array1); //[1, 1, 2, 2, 3, 4, 5]

// console.log(_.sortedUniqBy([1.2, 2.1, 2.9, 3.7, 3.3, 4, 5], Math.floor));
// //[ 1.2, 2.1, 3.7, 4, 5 ]

// let array = [1, 2, 3, 4];
// console.log(_.tail(array)); //[ 2, 3, 4 ]
// console.log(array);  //[1, 2, 3, 4]

// let array = [1, 2, 3, 4, 5, 6, 7];
// console.log(_.take(array)); //[ 1 ]
// console.log(_.take(array, 2)); //[ 1, 2 ]
// console.log(_.take(array, 0)); //[]
// console.log(_.take(array, 9)); //[1, 2, 3, 4, 5, 6, 7]

// let array = [1, 2, 3, 4, 5, 6];
// console.log(_.takeRight(array)); //[ 6 ]
// console.log(_.takeRight(array, 2)); //[ 5, 6 ]
// console.log(_.takeRight(array, 0)); //[]
// console.log(_.takeRight(array, 9)); //[ 1, 2, 3, 4, 5, 6 ]

// let array = [{"name":"mandy"},{"age":18} ];
// console.log(_.takeRightWhile(array,  item => item.age >10)); //[ { age: 18 } ]
// console.log(_.takeRightWhile(array,  item => item.age > 19)); //[]

// let array = [{ "name": "mandy", "age": 18 }, { "name": "chen", "age": 16 }];
// console.log(_.takeWhile(array, item => item.age > 16)); //[ { name: 'mandy', age: 18 } ]

// console.log(_.union([3, 3, 1, 4], [2, 5, 5, 6])); //[ 3, 1, 4, 2, 5, 6 ]

// console.log(_.unionBy([2.1, 1.4, 5.8], [3.1, 1.3, 5.2, 7.1], Math.floor));
// //[ 2.1, 1.4, 5.8, 3.1, 7.1 ]

// console.log(_.unionWith([1, 3, 2], [4, 5, 3, 2], _.isEqual)); //[ 1, 3, 2, 4, 5 ]

// console.log(_.uniq([1, 1, 4, 3, 5, 1, 3, 4])); //[ 1, 4, 3, 5 ]

// console.log(_.unionBy([2.1, 2.7, 4.2, 4.7], Math.floor)); //[ 2.1, 4.2 ]

// console.log(_.unionWith([2, 3, 4], [4, 3, 5, 6], _.isEqual)); //[ 2, 3, 4, 5, 6 ]

// console.log(_.zip(["mandy", "chen"], [16, 18], [666, 999])); 
// //[ [ 'mandy', 16, 666 ], [ 'chen', 18, 999 ] ]

// console.log(_.unzip([[ 'mandy', 16, 666 ], [ 'chen', 18, 999 ]]));
// //[ [ 'mandy', 'chen' ], [ 16, 18 ], [ 666, 999 ] ]

// console.log(_.zipObject(["name", "age"], ["mandy", 18]));
// //{ name: 'mandy', age: 18 }

// console.log(_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]));
// // { a: { b: [ [Object], [Object] ] } }

// console.log(_.zipWith([1, 2, 3], [4, 5, 6], [7, 8, 9], (a, b, c) => a + b + c)); 
// //[ 12, 15, 18 ]

// console.log(_.unzipWith([[1, 2], [10, 20]], _.add)); //[ 11, 22 ]

// let array=[1, 2, 3, 4, 2, 3, 1, 5];
// console.log(_.without(array, 1, 2)); //[ 3, 4, 3, 5 ]
// console.log(array); //[1, 2, 3, 4, 2, 3, 1, 5]

// console.log(_.xor([4, 3, 2], [8, 2, 4])); //[ 3, 8 ]

// console.log(_.xorBy([2.4, 4.3, 1.3], [2.7, 6.3, 1, 9], Math.floor));
// //[ 4.3, 6.3, 9 ]

console.log(_.xorWith([1, 4, 3, 2], [1, 3, 4, 7], _.isEqual)); //[ 2, 7 ]
