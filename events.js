const { log } = require("console");
const events = require("events");
//* Create emitter instance
const eventEmitter = new events();
//* Define eventListener (addEventListener) using emitter.on()
// eventEmitter.on("greet", () => {
//     log("Event is occured.")
// })
// //* Trigger event
// eventEmitter.emit("greet")

//TODO with args
// eventEmitter.on("greet", (name) => {
//   log(`${name} Event is occured.`);
// });
//* Trigger event
// eventEmitter.emit("greet", "function");

//TODO send arg as single object
eventEmitter.on("greet", (parmas) => {
    log(`Hello, my name is ${parmas.name}. I am ${parmas.age} old`)
})
//* Trigger event
eventEmitter.emit("greet", {name : "vamshi", age : 21})