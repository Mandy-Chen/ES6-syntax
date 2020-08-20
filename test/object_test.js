var assert = require('assert');
var should = require('should');

describe('Object', function () {
  // describe('Object.prototype.constructor', function () {
  //   it('All objects inherit  constructor property from its prototype.', function () {
  //     let object1 = {};
  //     object1.constructor.should.equal(Object);
  //     let object2 = new Object();
  //     object2.constructor.should.equal(Object);
  //     let array1 = [];
  //     array1.constructor.should.equal(Array);
  //     let array2 = new Array();
  //     array2.constructor.should.equal(Array);
  //   });
  // });
  // describe('Object.assign()', function () {
  //   it('source object is copied to target object.', function () {
  //     let source = { a: 1, b: 2 };
  //     let target = { c: 3, d: 4 };
  //     let result = Object.assign(source, target);
  //     console.log(result); //{ a: 1, b: 2, c: 3, d: 4 }
  //     result.should.not.equal({ a: 1, b: 2, c: 3, d: 4 });
  //     result.should.equal(source);
  //     let target1 = { b: 8888, d: 4 };
  //     let result1 = Object.assign(source, target1);
  //     console.log(result1); //{ a: 1, b: 8888, c: 3, d: 4 }
  //     result1.should.equal(source);
  //   })
  //   it('Inheritance properties and non-enumerated properties cannot be copied.', function () {
  //     let object = Object.create(
  //       { age: 18 }, //age是个继承属性
  //       {
  //         name: {  //name是不可枚举属性
  //           value: "mandy"
  //         },
  //         salary: { //salary是自身可枚举属性
  //           value: "99999",
  //           enumerable: true,
  //         }
  //       });
  //     let result = Object.assign({}, object);
  //     console.log(result); //{ salary: '99999' }
  //     result.should.not.equal(object);
  //   });
  //   it('original type is wrapped as an object.', function () {
  //     let str = "abc";
  //     let boo = true;
  //     let num = 100;
  //     let result = Object.assign({}, null, boo, undefined, str, num);
  //     console.log(result); //{ '0': 'a', '1': 'b', '2': 'c' }
  //   });
  // })
  // describe('Object.create()', function () {
  //   it('new object.', function () {
  //     const person = {
  //       isGirl: false,
  //       info: function () {
  //         return 'My name is ' + this.name + ' ,am I a girl : ' + this.isGirl;
  //       }
  //     }
  //     const result = Object.create(person);
  //     result.name = "mandy";
  //     result.isGirl = true;
  //     console.log(result);  //{ name: 'mandy', isGirl: true }
  //     result.info().should.equal("My name is mandy ,am I a girl : true");
  //   });
  // })
  // describe('Object.defineProperties', function () {
  //   it('Define new property or modify existing property.', function () {
  //     let object = {};
  //     Object.defineProperties(object, {
  //       name: {
  //         value: "mandy",
  //         writable: true,
  //         enumerable: true,
  //       },
  //       age: {
  //         value: 18,
  //         writable: true,
  //       }
  //     })
  //     console.log(object); //{ name: 'mandy' }
  //     object.should.not.null();
  //   })
  // })
  // describe('Object.defineProperty()', function () {
  //   it('Define new property or modify an existing property.', function () {
  //     let object = {};
  //     Object.defineProperty(object, "name", {
  //       value: "mandy",
  //       enumerable: true
  //     });
  //     console.log(object); //{ name: 'mandy' }
  //     object.name.should.equal("mandy");
  //   })
  // })
  // describe('Object.entries()', function () {
  //   let object = { name: "mandy", age: 18 };
  //   it('Traverse the object.', function () {
  //     for(let [key,value] of Object.entries(object)){
  //       console.log(key+" : "+value); 
  //       //name : mandy
  //       //age : 18
  //     }
  //   })
  //   it('array like object',function(){
  //     let result=Object.entries(object);
  //     console.log(result); //[ [ 'name', 'mandy' ], [ 'age', 18 ] ]
  //     Array.isArray(result).should.equal(true)
  //   })
  // })
  // describe('Object.freeze()', function () {
  //   it('Frozen objects are immutable.', function () {
  //     let object = {
  //       name: "mandy",
  //       age: 18
  //     }
  //     Object.freeze(object);
  //     object.name = "chen";
  //     delete object.age;
  //     object.name.should.equal("mandy");
  //     should(object).has.properties("name", "age");
  //   })
  // })
  // describe('Object.fromEntries()', function () {
  //   it('key-value pair to an object.', function () {
  //     let map = new Map([["name", "mandy"], ["age", 18]]);
  //     let result = Object.fromEntries(map);
  //      console.log(result); //{ name: 'mandy', age: 18 }
  //     result.constructor.should.equal(Object);
  //   })
  // })
  // describe('Object.getOwnPropertyDescriptor()', function () {
  //   it('The property descriptor for the own property.', function () {
  //     let object = {
  //       name: {
  //         value: "mandy",
  //         enumerable: true,
  //         writable: true
  //       }
  //     };
  //     let des = Object.getOwnPropertyDescriptor(object, "name");
  //     console.log(des);
  //     des.writable.should.equal(true);
  //     des.value.value.should.equal("mandy");
  //     des.enumerable.should.equal(true);
  //   })
  // })
  // describe('Object.getOwnPropertyDescriptors', function () {
  //   it('Gets all descriptors for the object.', function () {
  //     let object = { name: "mandy" };
  //     let result = Object.getOwnPropertyDescriptors(object);
  //     console.log(result);
  //     // {
  //     //   name: {
  //     //     value: 'mandy',
  //     //     writable: true,
  //     //     enumerable: true,
  //     //     configurable: true
  //     //   }
  //     // }
  //   })
  // })
  // describe('Object.getOwnPropertyNames()', function () {
  //   it('The property names of its own properties make up an array.', function () {
  //     let arr = ["a", "b", "c"];
  //     let object = { name: "mandy", age: 18 }
  //     let result1 = Object.getOwnPropertyNames(arr);
  //     let result2 = Object.getOwnPropertyNames(object);
  //     console.log(result1); //[ '0', '1', '2', 'length' ]
  //     console.log(result2); //[ 'name', 'age' ]
  //   })
  // })
  // describe(' Object.getOwnPropertySymbols()', function () {
  //   it('An array of all Symbol properties of the object itself.', function () {
  //     let object = {};
  //     let a = Symbol("a");
  //     let b = Symbol.for("b");
  //     object[a] = "localSymbol";
  //     object[b] = "globalSymbol";
  //     let objectSymbols = Object.getOwnPropertySymbols(object);
  //     console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
  //     console.log(objectSymbols[0])      // Symbol(a)
  //     objectSymbols.length.should.equal(2);
  //   })
  // })
  // describe('Object.getPrototypeOf()', function () {
  //   it('return object of the prototype.', function () {
  //     let object = {};
  //     let result = Object.create(object);
  //     console.log(result);
  //     Object.getPrototypeOf(result).should.equal(object);
  //   })
  // })
  // describe('Object.is()', function () {
  //   it('Determines whether two values are the same.', function () {
  //     let object1 = { name: "mandy" };
  //     let object2 = { name: "mandy" };
  //     Object.is("mandy", "mandy").should.equal(true);
  //     Object.is(object1, object2).should.equal(false);
  //   })
  // })
  // describe('Object.isExtensible() ', function () {
  //   it('Determines whether the object is scalable.', function () {
  //     let object = {};
  //     Object.isExtensible(object).should.equal(true);
  //     Object.preventExtensions(object);
  //     Object.isExtensible(object).should.equal(false);
  //     let sealed = Object.isSealed({});
  //     Object.isExtensible(sealed).should.equal(false);
  //     let freeze = Object.freeze({});
  //     Object.isExtensible(freeze).should.equal(false);
  //   })
  // })
  describe('Object.isFrozen()', function () {
    it('Is Frozen', function () {
      //初始的空对象默认是非冻结对象
      Object.isFrozen({}).should.equal(false);
      //不可扩展的空对象是冻结对象
      let preExten = Object.preventExtensions({});
      Object.isFrozen(preExten).should.equal(true);
      // 一个非空对象默认是非冻结对象
      var object = { name: "mandy" };
      Object.isFrozen(object).should.equal(false);
      // 让这个对象变的不可扩展,并不意味着这个对象变成了冻结对象
      // 因为name属性仍然是可以配置的(而且可写的).
      Object.preventExtensions(object);
      Object.isFrozen(object).should.equal(false);
      // 此时,如果删除了这个属性,则它会成为一个冻结对象.
      delete object.name;
      Object.isFrozen(object).should.equal(true)
    })
  })
});

