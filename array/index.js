// console.log("1.Array.of()———将参数中的所有值作为元素形成数组");
// console.log(Array.of(1,2,3,4));
// console.log(Array.of(1,"2",false));
// console.log(Array.of(1,"2",false));
// console.log(Array.of(3));
// console.log(Array.of(3).length);
// console.log(Array.of());
// console.log(Array.of(null));
// console.log(Array.of(undefined));
// console.log(Array(3));
// console.log(Array(3).length);


// let array1=[1,2,3,4];
// let array2=[1,2,3,4]
// console.log(array1==array2);
// console.log(array1===array2);

// console.log("Array.from()——将类数组对象或可迭代对象转化为数组。")
// console.log(Array.from([1,2]));
// console.log(Array.from([1,,2]));
// console.log(Array.from([1]));
// console.log(Array.from([null]));
// console.log(Array.from(8));
// console.log(Array.from(null));
// console.log(Array.from(undefined));
// console.log(Array.from());
// console.log(Array.from('mandy'));
// console.log(Array.from([1, 2, 3], x => x * x));
// const set = new Set(['mandy', 'sky', 'hans', 'mandy']);
// console.log(Array.from(set));
// const map = new Map([[1, 2], [2, 4], [4, 8]]);
// console.log(Array.from(map));
// const mapper = new Map([['1', 'a'], ['2', 'b']]);
// console.log(Array.from(mapper.values()));
// console.log(Array.from(mapper.keys()));
// let map=new Map();
// map.set(1,"mandy");
// map.set(2,"chen");
// console.log(Array.from(map));
// let array=["mandy","chen","mandy"];
// let set=new Set(array);
// console.log(Array.from(set));
// console.log(Array.from({length:4},(length,i)=>i));

// let array=Array.of(1,2,3,4,5,6);
// console.log(array.find(item=>(item>4)));

// let array=Array.of(1,3,2,4);
// console.log(array.findIndex(item=>item==3));

// let array=Array.of(1,2,3,4,5,6,7);
// console.log(array.fill(0,1,4));

// let array =Array.of(1,2,3,4);
// console.log(array.copyWithin(0,2,4));
// let array1 =Array.of(1,2,3,4,5);
// console.log(array1.copyWithin(0,2));
// let array2=Array.of(1,2,3,4,5,6);
// console.log(array2.copyWithin(-3,0));

// for(let [key,value] of ["mandy","chen"].entries()){
//     console.log(key,value);
// }

// let entries=["mandy","chen"].entries();
// console.log(entries.next().value);
// console.log(entries.next().value);

// console.log([...["mandy","chen"].entries()]);

// for(let key of ["mandy","chen"].entries()){
//     console.log(key);
// }
// console.log([...["mandy","chen"].keys()]);

// for(let value of ["mandy","chen"].values()){
//     console.log(value);
// }

// console.log([...["mandy","chen"].values()]);

// let array=[1,2,3,4,NaN];
// console.log(array.includes(4));
// console.log(array.includes(2,2));
// console.log(array.includes(NaN));

// console.log([1,[2,3],[4,5]].flat());
// console.log([1,[2,[3,4]]].flat(1));
// console.log([1,[2,3,[4,[5,6]]]].flat(Infinity));
// console.log([1,,[2,,3]].flat());

// console.log([1,2,,3].flatMap(i=>i*i));

// let array=["mandy","chen"]
// console.log([...array]);
// console.log([...[1,2],...[3,4]]);

// let set=new Set(["mandy","chen"])
// console.log(set.has("mandy"));
// let map=new Map();
// map.set("mandy","chen")
// console.log(map.has("mandy"));

// let array=Array.of("mandy","chen",18);
// console.log(array.filter(item=>item.length>3));
// console.log(array) ;

// console.log(Array.isArray([1,2,3]));
// console.log(Array.isArray({"mandy":"chen"}));
// console.log(Array.isArray(12));

// let array=["mandy","chen",18,9999999];
// array.forEach(item =>console.log(item));
// array.forEach((item,index)=>console.log(index+" "+item))

// let sum = 0;
// let array = [1, 2, 3, 4];
// getSum = (item) => {
//     sum += item;
// }
// array.forEach(getSum);
// console.log(sum);

// let array = [1, 2, 3, 4]
// getSum = (total, item) => {
//     return total + item;
// }
// console.log(array.reduce(getSum));
// console.log(array.reduce(getSum,10));

let array1=["I","am"];
let array2=["mandy","chen"];
console.log(array1.concat(array2));
console.log(array1);
console.log(array2);