




const EventEmitter = require("events"); //events.EventEmitter is just a self reference

function createEmitter(onOpen, onClose) {    
  const myEmitter = new EventEmitter()
  myEmitter.once('open', onOpen); 
  myEmitter.once('close', onClose);
  return myEmitter; //This is important
}

function opened(emitter) {
  emitter.emit('open'); 
}
function closed(emitter) {
  emitter.emit('close');
}

let emitter = createEmitter(
  () => console.log("Opened!"), () => console.log("Closed!")
);
opened(emitter);
closed(emitter);

module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;
