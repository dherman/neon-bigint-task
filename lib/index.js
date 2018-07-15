var addon = require('../native');

addon.fibonacci(1000000, (err, result) => {
    console.log("async result:");
    console.log(result);
});

console.log("computing fibonacci(1000000) in background thread...");
console.log("main thread is still responsive!");
