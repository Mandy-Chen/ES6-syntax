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
  describe('Object.freeze()', function () {
    it('Frozen objects are immutable.', function () {
      let object = {
        name: "mandy",
        age: 18
      }
      Object.freeze(object);
      object.name = "chen";
      delete object.age;
      object.name.should.equal("mandy");
      should(object).has.properties("name", "age");
    })
  })


});

