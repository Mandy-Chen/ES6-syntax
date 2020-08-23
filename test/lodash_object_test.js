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
    // describe('_.assignWith()', function () {
    //     it('', function () {
    //         let target = { id: 0 }
    //         _.assignWith(target, { id: 1, name: "a" }, { id: 2, age: 18 })
    //         console.log(target); //{ id: 2, name: 'a', age: 18 }
    //     })
    //     it("", function () {
    //         function customizer(objValue, srcValue) {
    //             return _.isUndefined(objValue) ? srcValue : objValue;
    //         }
    //         var defaults = _.partialRight(_.assignInWith, customizer);
    //         console.log(defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })); //{ a: 1, b: 2 }
    //     })
    // })
    // describe('_.at(object, [paths])', function () {
    //     it('', function () {
    //         let object = { a: [{ b: { c: { d: 1 } } }, {e:2}] };
    //         console.log(_.at(object, ['a[0].b.c.d', 'a[1]'])); //[ 1, { e: 2 } ]
    //     })
    // })
    // describe('_.create(prototype, [properties])', function () {
    //     it('', function () {
    //         function Person() {
    //             this.name = "";
    //         }
    //         function Student() {
    //             Person.call(this);
    //         }
    //         Student.prototype = _.create(Person.prototype, { 'constructor': Student });
    //         let student = new Student;
    //         (student instanceof Person).should.equal(true);
    //         (student instanceof Student).should.equal(true);
    //         console.log(student); //Student { name: '' }
    //     })
    // })
    // describe('_.defaults(object, [sources])', function () {
    //     it('', function () {
    //         let object = { a: 1, b: 2, a: 3, b: 4 };
    //         _.defaults(object);
    //         console.log(object); //{ a: 3, b: 4 }
    //     })
    // })
    // describe('_.defaultsDeep(object, [sources])', function () {
    //     let object = { a: { b: 1 }, a: { b: { c: 2 } } };
    //     _.defaultsDeep(object);
    //     console.log(object); //{ a: { b: { c: 2 } } }
    // })
    describe('_.toPairs(object)', function () {
        function Student() {
            this.name = "mandy";
            this.age = 18;
        }
        Student.prototype.id = 1;
        let student = new Student;
        console.log(_.toPairs(student)); //[ [ 'name', 'mandy' ], [ 'age', 18 ] ]
        console.log(student);// Student { name: 'mandy', age: 18 }
    })
})