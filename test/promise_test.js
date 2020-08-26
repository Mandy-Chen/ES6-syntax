var should = require('should');
const { debounce, reject, values } = require('lodash');
describe('Promise', function () {
    describe('Promise.all(iterable)', function () {
        it('', function () {
            let promise1 = Promise.resolve(9);
            let promise2 = 6;
            let promise3 = new Promise((resolve, reject) => {
                console.log('resolve:', resolve); //resolve: [Function (anonymous)]
                console.log('reject:', reject); //reject: [Function (anonymous)]
                setTimeout(resolve, 1000, 'mandy');
            });
            console.log('promise1:', promise1); //promise1: Promise { 9 }
            console.log('promise2:', promise2); //promise2: 6
            console.log('promise3:', promise3); //promise3: Promise { <pending> }
            Promise.all([promise1, promise2, promise3]).then((values) => {
                console.log(values); //[ 9, 6, 'mandy' ]
            })
        })
    })
})