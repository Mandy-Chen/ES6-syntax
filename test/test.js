var assert = require('assert');
var should = require('should');
// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       var user = {
//         name: 'tj'
//         , pets: ['tobi', 'loki', 'jane', 'bandit']
//       };

//       user.should.have.property('name', 'tj');
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

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
  describe('Object.assign()', function () {
    it('source object is copied to target object.', function () {
      let source = { a: 1, b: 2 };
      let target = { c: 3, d: 4 };
      let result = Object.assign(source, target);
      console.log(result); //{ a: 1, b: 2, c: 3, d: 4 }
      result.should.not.equal({ a: 1, b: 2, c: 3, d: 4 });
      result.should.equal(source);
      let target1={b:8888,d:4};
      let result1=Object.assign(source,target1);
      console.log(result1); //{ a: 1, b: 8888, c: 3, d: 4 }
      result1.should.equal(source);
    })
  })


});

