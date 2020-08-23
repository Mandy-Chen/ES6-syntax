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
    // describe('_.toPairs(object)', function () {
    //     function Student() {
    //         this.name = "mandy";
    //         this.age = 18;
    //     }
    //     Student.prototype.id = 1;
    //     let student = new Student;
    //     console.log(_.toPairs(student)); //[ [ 'name', 'mandy' ], [ 'age', 18 ] ]
    //     console.log(student);// Student { name: 'mandy', age: 18 }
    // })
    // describe('_.toPairsIn(object)',function(){
    //     function Student(){
    //         this.name="mandy";
    //         this.age=18;
    //     }
    //     Student.prototype.id=1;
    //     let student=new Student;
    //     console.log(_.toPairsIn(student)); //[ [ 'name', 'mandy' ], [ 'age', 18 ], [ 'id', 1 ] ]
    //     console.log(student); //Student { name: 'mandy', age: 18 }
    // })
    // describe('_.assignIn(object, [sources])', function () {
    //     function Student() {
    //         this.a = 1;
    //     }
    //     function Teacher() {
    //         this.b = 2;
    //     }
    //     Student.prototype.c = 3;
    //     Teacher.prototype.d = 4;
    //     let object = { a: 0 };
    //     console.log(_.assignIn(object, new Student, new Teacher)); //{ a: 1, c: 3, b: 2, d: 4 }
    //     console.log(object); //{ a: 1, c: 3, b: 2, d: 4 }
    // })
    // describe('_.assignInWith(object, sources, [customizer])', function () {
    //     function customizer(objValue, srcValue) {
    //         return _.isUndefined(objValue) ? srcValue : objValue;
    //     }
    //     let defaults = _.partialRight(_.assignInWith, customizer);
    //     console.log(defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })); //{ a: 1, b: 2 }
    // })
    // describe('_.findKey(object, [predicate=_.identity])', function () {
    //     it('',function(){
    //         let users = {
    //             'mandy': { 'id': 1, 'active': false },
    //             'chen': { 'id': 2, 'active': true },
    //             'eva': { 'id': 3, 'active': false }
    //         }
    //         _.findKey(users,item=>item.id>0).should.equal('mandy');
    //         _.findKey(users,{'id':3,'active':false}).should.equal('eva');
    //         _.findKey(users,['active',false]).should.equal('mandy');
    //         _.findKey(users,'active').should.equal('chen');
    //     })
    // })
    // describe('_.findLastKey(object, [predicate=_.identity])', function () {
    //     it('', function () {
    //         let users = {
    //             'mandy': { 'id': 1, 'active': false },
    //             'chen': { 'id': 2, 'active': true },
    //             'eva': { 'id': 3, 'active': false },
    //             'viki':{'id': 3, 'active': false }
    //         }
    //         _.findLastKey(users, item => item.id > 0).should.equal('viki');
    //         _.findLastKey(users, { 'id': 3, 'active': false }).should.equal('viki');
    //         _.findLastKey(users, ['active', false]).should.equal('viki');
    //         _.findLastKey(users, 'active').should.equal('chen');
    //     })
    // })
    // describe('_.forIn(object, [iteratee=_.identity])', function () {
    //     it('', function () {
    //         function Person() {
    //             this.a = 1;
    //             this.b = 2;
    //         }
    //         Person.prototype.c = 3;
    //         _.forIn(new Person, function (value, key) {
    //             console.log(value + ' ' + key);
    //         })
    //         //1 a
    //         //2 b
    //         //3 c
    //     })
    // })
    // describe('_.forInRight(object, [iteratee=_.identity])', function () {
    //     it('', function () {
    //         function Person() {
    //             this.a = 1;
    //             this.b = 2;
    //         }
    //         Person.prototype.c = 3;
    //         _.forInRight(new Person, function (value, key) {
    //             console.log(value + ' ' + key);
    //         })
    //         //3 c
    //         //2 b
    //         //1 a
    //     })
    // })
    // describe('_.forOwn(object, [iteratee=_.identity])', function () {
    //     it('', function () {
    //         function Person() {
    //             this.a = 1;
    //             this.b = 2;
    //         }
    //         Person.prototype.c = 3;
    //         _.forOwn(new Person, function (value, key) {
    //             console.log(value + ' ' + key);
    //         })
    //         //1 a
    //         //2 b
    //     })
    // })
    // describe('_.forOwnRight(object, [iteratee=_.identity])', function () {
    //     it('', function () {
    //         function Person() {
    //             this.a = 1;
    //             this.b = 2;
    //         }
    //         Person.prototype.c = 3;
    //         _.forOwnRight(new Person, function (value, key) {
    //             console.log(value + ' ' + key);
    //         })
    //         //2 b
    //         //1 a
    //     })
    // })
    // describe('_.functions(object)', function () {
    //     it('', function () {
    //         function Person() {
    //             this.a = _.constant('a');
    //             this.b = _.constant('b');
    //         }
    //         Person.prototype.c = _.constant('c');
    //         let person = new Person; 
    //         console.log(_.functions(person)); //[ 'a', 'b' ]
    //     })
    // })
    // describe('_.functionsIn(object)', function () {
    //     it('', function () {
    //         function Person() {
    //             this.a = _.constant('a');
    //             this.b = _.constant('b');
    //         }
    //         Person.prototype.c = _.constant('c');
    //         let person = new Person; 
    //         console.log(_.functionsIn(person)); //[ 'a', 'b', 'c' ]
    //     })
    // })
    // describe('_.get(object, path, [defaultValue])', function () {
    //     it('', function () {
    //         let object = { a: [{ b: { c: 1 } }] }
    //         _.get(object, 'a[0].b.c').should.equal(1);
    //         _.get(object, ['a', '0', 'b', 'c']).should.equal(1); 
    //         _.get(object, 'a[0].b.c.d', 'defaultValue').should.equal('defaultValue')
    //     })
    // })
    // describe('_.has(object, path)', function () {
    //     it('', function () {
    //         let object = { a: [{ b: { c: 1 } }] }
    //         _.has(object, 'a.[0]b.c').should.equal(true);
    //         _.has(object, ['a', '0', 'b']).should.equal(true);
    //         _.has(object, 'a[0].b.c.d').should.equal(false)
    //     })
    // })
    // describe('_.hasIn(object, path)', function () {
    //     it('', function () {
    //         let object = _.create({ 'a': _.create({ b: 1 }) });
    //         _.hasIn(object,'a').should.equal(true);
    //         _.hasIn(object,'a.b').should.equal(true);
    //         _.hasIn(object,['a','b']).should.equal(true);
    //         _.hasIn(object,'b').should.equal(false)
    //     })
    // })
    describe('_.invert(object)', function () {
        it('', function () {
            let object = { 'a': 1, 'b': 2, 'c': 1 };
            console.log(_.invert(object)); //{ '1': 'c', '2': 'b' }
            console.log(object); //{ a: 1, b: 2, c: 1 }
        })
    })
})