# proxy-service-container

## About

In proxy-service-container you can use different services (i.e. storage services). 

Each Proxy Service has defined methods which are callable from outside with unified parameters 
(unified - when method is called) and each Proxy Service includes service related logic.

[Description of Proxy Pattern](https://www.joezimjs.com/javascript/javascript-design-patterns-proxy/)

With proxy-service-container you can handle multiple services and you can choose between them 
which service and which method should be called.

## Installation

## Example usage

```javascript
import ProxyServiceContainer from "../dist/proxy-service-container.js";

const sc1 = new ProxyServiceContainer();
 
sc1.addService('storage1', {
    save: function (a, b, c) {
        // dependency injection here - dependency1 and dependency2
        // rest parameters are from sc1.call('save', 1, 2, 3); - so a === 1, b === 2, c === 3
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
}, true); // last parameter is true - set proxy service as default
 
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
```

Gives output:

```
storage2.save called 1 2 3
result = storage2 result
storage1.save called 4 5 6
result = storage 1 result
storage1.save called 7 8 9
{ test: 1 }
storage2.save called 7 8 9
result = { storage1: 'storage 1 result', storage2: 'storage2 result' }
result = -1
result = { storage1: -1, storage2: -1 }
result = -2
storage2.save called 20 21 22
result = { storage2: 'storage2 result' }
```

## Methods

### ```ProxyServiceContainer::addService(String name, Object methods, Object dependencies = {}, Boolean isDefault = false)```

Adds Proxy Service.

Methods are plain object which contains keys as methods names and values methods itself.

Each value of ```methods``` (which is a function) has passed parameters. 
If parameter is named the same as dependency key - a dependency will be injected as parameter.

Otherwise the rest parameters has values in order as in ```call```, ```callOn``` and ```callAll```
methods.

### ```ProxyServiceContainer::call(String methodName[, Mixed param1,  Mixed param2, ...])```

Calls method ```methodName``` with parameters ```param1, param2, ...``` on default Proxy Service.

Default Proxy service is first added or currently added with 
```ProxyServiceContainer::addService``` with 4th parameter equals true.

### ```ProxyServiceContainer::callAll(String methodName[, Mixed param1, Mixed param2, ...])```

Calls all Proxy Services methods ```methodName``` with parameters ```param1, param2, ...```

### ```ProxyServiceContainer::callOn(Array serviceNames, String methodName[, Mixed param1, Mixed param2, ...])```

Calls method defined in ```methodName``` on Proxy Services passed as string names in ```serviceNames```.
