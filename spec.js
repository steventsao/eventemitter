let EventEmitter = require("./index");
let expect,
  { spyOn } = require("expect");

// TODO use jasmine's describe pattern
let testEmit = () => {
  let eventEmitter = new EventEmitter();
  let defaultCallback = v => console.log("value updated: " + v);
  let spy = spyOn(defaultCallback);
  eventEmitter.addListener("value", defaultCallback);
  eventEmitter.emit("value", 1);
  eventEmitter.emit("value", 2);
  expect(spy).toHaveBeenCalled();
};

let testNotEmit = () => {
  let eventEmitter = new EventEmitter();
  let defaultCallback = v => console.log("value updated: " + v);
  let spy = spyOn(defaultCallback);
  eventEmitter.addListener("value", defaultCallback);
  eventEmitter.removeListener("value", defaultCallback);
  eventEmitter.emit("value", 3);
  eventEmitter.emit("value", 4);
  expect(spy).not.toHaveBeenCalled();
};

testEmit();
testNotEmit();
