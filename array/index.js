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

// let array1=["I","am"];
// let array2=["mandy","chen"];
// console.log(array1.concat(array2));
// console.log(array1);
// console.log(array2);                    

// let array=[1,2,3,4,5,10];
// console.log(array.every(item=>item>0));
// console.log(array.every(item=>item>3));

// let array2=[];
// console.log(array2.every(item=>item>0));

// let array = [1, 4, 3, 5, 4];
// console.log(array.indexOf(4)); //1
// console.log(array.indexOf(4,2)); //4
// console.log(array.indexOf(4,-4)); //1
// console.log(array.indexOf(4,-3)); //4

// let array=["mandy","chen","age"]
// console.log(array.join()); //mandy,chen,age
// console.log(array.join("")); //mandychenage
// console.log(array.join("-"));  //mandy-chen-age
// console.log(array.join("+"));  //mandy+chen+age

// let array = [1, 3, 2, 3, 2, 1];
// console.log(array.lastIndexOf(2));  //4
// console.log(array.lastIndexOf(3, 9));  //3
// console.log(array.lastIndexOf(3, 1));  //1

// let array=[1,2,3];
// console.log(array.map(item=>item*2));  //[2,4,6]
// console.log(array); //[1,2,3]

// let array=["mandy","chen","age"];
// console.log(array.pop());  //age
// console.log(array); //["mandy", "chen"]

// let array=["mandy","chen"];
// console.log(array.push("age"));  //3
// console.log(array);  //["mandy", "chen", "age"]

// let array=[[1,2],[3,4],[5,6]];
// console.log(array.reduceRight((sum,current)=>sum.concat(current))); 
// // [5, 6, 3, 4, 1, 2]
// let array1=[1,2,3,4];
// console.log(array1.reduceRight((sum,current)=>sum+=current));  //10
// let array2=['1','2','3','4']
// console.log(array2.reduceRight((sum,current)=>sum.concat(current))); //4321

// let array = ["mandy","chen","age"];
// console.log(array.reverse()); //["age","chen","mandy"]
// console.log(array); //["age","chen","mandy"]

// let array=[1,2,3,4]
// console.log(array.shift()); //1
// console.log(array);  //[2,3,4]

// let array = [1, 2, 3, 4, 5];
// console.log(array.slice(1)); //[2, 3, 4, 5]
// console.log(array.slice(2,4));  //[3, 4]
// console.log(array.slice(-3,-1)); //[3, 4]
// console.log(array);  //[1, 2, 3, 4, 5]

// let array = [1, 2, 3, 4];
// console.log(array.some(item => item > 2));  //true
// console.log(array);  //[1, 2, 3, 4]

// let array = ["mandy", "chen", "age"];
// console.log(array.sort()); //["age", "chen", "mandy"]
// console.log(array); //["age", "chen", "mandy"]
// let array1 = [1, 2, 10000, 90];
// console.log(array1.sort());  //[1, 10000, 2, 90]
// console.log(array1.sort((a,b)=>a-b)); //[1, 2, 90, 10000]
// console.log(array1);  //[1, 2, 90, 10000]

// let array = ["mandy", "chen", "age", "num"];
// console.log(array.splice(1,0,"add")); //[]
// console.log(array); //["mandy", "add", "chen", "age", "num"]
// console.log(array.splice(1,1,"delete")); //["add"]
// console.log(array); //["mandy", "delete", "chen", "age", "num"]
// console.log(array.splice(3)); // ["age", "num"]
// console.log(array); // ["mandy", "delete", "chen"]

// var prices = ['￥7', 500, 8123, 12];
// console.log(prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }));
// //￥7,￥500,￥8,123,￥12
// console.log(prices); //["￥7", 500, 8123, 12]

// let array = [1, 2, "mandy", "chen", 6];
// console.log(array.toString()); //1,2,mandy,chen,6
// console.log(array);//[1, 2, "mandy", "chen", 6]

// let array = [1, 2, 3];
// console.log(array.unshift(3, 4, 5)); //6
// console.log(array); //[3, 4, 5, 1, 2, 3]
// console.log(array.unshift("mandy")); //7
// console.log(array); //["mandy", 3, 4, 5, 1, 2, 3]
