import ProxyServiceContainer from "../dist/proxy-service-container.js";

const sc1 = new ProxyServiceContainer();

sc1.addService('storage1', {
    save: function (a, b, c) {
        // dependency injection here - dependency1 and dependency2
        // rest parameters are from sc1.call('save', 1, 2, 3); - so a === 1, b ===2, c === 3
        console.log('storage1.save called', a, b, c);
        if (!this.test) {
            this.test = 1;
        } else {
            console.log(this);          // { test: 1 }
                                        // this === plain object which remember set values
        }
        return 'storage 1 result';
    }
});

sc1.addService('storage2', {
    save: function (a, b, c) {
        console.log('storage2.save called', a, b, c);
        return 'storage2 result';
    }
}, undefined, true);

let result;

result = sc1.call('save', 1, 2, 3);                         // storage2.save called 1 2 3
console.log('result =', result);                            // result = storage2 result

sc1.setDefaultService('storage1');

result = sc1.call('save', 4, 5, 6);                         // storage1.save called dependency2 value 4 dependency1 value 5 6
console.log('result =', result);                            // result = storage 1 result

result = sc1.callAll('save', 7, 8, 9);                      // storage1.save called dependency2 value 7 dependency1 value 8 9
                                                            // storage2.save called 7 8 9
console.log('result =', result);                            // result = { storage1: 'storage 1 result', storage2: 'storage2 result' }

result = sc1.call('not_existing_function', 'error');
console.log('result =', result);                            // result = -1

result = sc1.callAll('not_existing_function', 10, 11, 12);
console.log('result =', result);                            // result = { storage1: -1, storage2: -1 }

result = sc1.setDefaultService('not_existing_service');
console.log('result =', result);                            // result = -2

result = sc1.callOn(['storage2'], 'save', 20, 21, 22);      // storage2.save called 20 21 22
console.log('result =', result);                            // result = { storage2: 'storage2 result' }
