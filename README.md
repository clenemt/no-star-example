# no-:star:-example

This plugin allows for good looking JSDoc `@example` even if you are documenting your code in the following manner.

```js
/**
 * A polyfill for javascript promise. See example below.
 * @example

    var promise = new Promise(function (resolve, reject) {
        // do a thing, possibly async, then…
        everythingIsOkay = true;

        if (everythingIsOkay) {
            resolve('It worked');
        } else {
            reject('It failed');
        }
    });

    // Here's how you use that promise
    promise.then(function (value) {
        console.log(value);
    }, function (reason) {
        console.log(reason);
    });

    // → 'It worked'

 * @constructor
 * @memberof module:exp/promise
 * @param {Function} resolver - A resolver function to pass to the Promise constructor.
 *                              This function can have up to two parameters, resolve and reject.
 *                              You should do something within the resolver, perhaps async,
 *                              then call resolve if everything worked, otherwise call reject.
 * @return {Promise}
 */
 function Promise (resolver) {}
```

## Result

Rendered with [docdash](https://github.com/clenemt/docdash):

![](https://cloud.githubusercontent.com/assets/447956/13400867/0e4813ca-df0a-11e5-9f69-bfd13f75a35a.png)

## Usage

Inside your `.jsdoc.conf` put: 

```json
"plugins": [
    "path/to/no-star-example"
]
```

## License

Licensed under MIT (see [license](LICENSE.md)).


