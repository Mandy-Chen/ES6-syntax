var should = require('should');
var _ = require('lodash');
describe('Lodash_Object', function () {
    // describe('_.assign()', function () {
    //     it('Assign the enumerable properties of the source object to the target object', function () {
    //         function Teacher() {
    //             this.id = 1;
    //         }
    //         Teacher.prototype.name = "zhang";
    //         function Student() {
    //             this.id = 2;
    //         }
    //         Student.prototype.age = 18;
    //         let target = { id: 0 }
    //         _.assign(target, new Teacher, new Student);
    //         console.log(target); //{ id: 2 }
    //     })
    // })
    // describe('_.assignIn()', function () {
    //     it('Traverses and inherits the properties of the source object', function () {
    //         function Teacher() {
    //             this.id = 1;
    //         }
    //         Teacher.prototype.name = "zhang";
    //         function Student() {
    //             this.id = 2;
    //         }
    //         Student.prototype.age = 18;
    //         let target = { id: 0 };
    //         _.assignIn(target, new Teacher, new Student);
    //         console.log(target); //{ id: 2, name: 'zhang', age: 18 }
    //     })
    // })
    describe('_.assignWith()', function () {
        it('', function () {
            let target = { id: 0 }
            _.assignWith(target, { id: 1, name: "a" }, { id: 2, age: 18 })
            console.log(target); //{ id: 2, name: 'a', age: 18 }
        })
        it("", function () {
            function customizer(objValue, srcValue) {
                return _.isUndefined(objValue) ? srcValue : objValue;
            }
            var defaults = _.partialRight(_.assignInWith, customizer);
            console.log(defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })); //{ a: 1, b: 2 }
        })
    })
})