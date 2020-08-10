console.log("1.Array.of()———将参数中的所有值作为元素形成数组");
console.log(Array.of(1,2,3,4));
console.log(Array.of(1,"2",false));
console.log(Array.of(1,"2",false));
console.log(Array.of(3));
console.log(Array.of(3).length);
console.log(Array.of());
console.log(Array.of(null));
console.log(Array.of(undefined));
console.log(Array(3));
console.log(Array(3).length);


let array1=[1,2,3,4];
let array2=[1,2,3,4]
console.log(array1==array2);
console.log(array1===array2);

console.log("Array.from()——将类数组对象或可迭代对象转化为数组。")
console.log(Array.from([1,2]));
console.log(Array.from([1,,2]));
console.log(Array.from([1]));
console.log(Array.from([null]));
console.log(Array.from(8));
console.log(Array.from(null));
console.log(Array.from(undefined));
console.log(Array.from());
console.log(Array.from('mandy'));
console.log(Array.from([1, 2, 3], x => x * x));
const set = new Set(['mandy', 'sky', 'hans', 'mandy']);
console.log(Array.from(set));
const map = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(Array.from(map));
const mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(Array.from(mapper.values()));
console.log(Array.from(mapper.keys()));
let map=new Map();
map.set(1,"mandy");
map.set(2,"chen");
console.log(Array.from(map));
let array=["mandy","chen","mandy"];
let set=new Set(array);
console.log(Array.from(set));
console.log(Array.from({length:4},(length,i)=>i));
