var should = require('should');
var _ = require('lodash');
describe('Lodash_Object', function () {
    describe('_.assign()', function () {
        it('Assign the enumerable properties of the source object to the target object', function () {
            let teacher = {
                id: 1,
                name: "zhang"
            }
            let student = {
                id: 2,
                age: 18
            }
            let target = { id: 0 }
            _.assign(target, teacher, student);
            console.log(target); //{ id: 2, name: 'zhang', age: 18 }
        })
    })
})