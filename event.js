const EventEmitter = require('node:events');

const myEmitter = new EventEmitter();

const event1 = myEmitter.on('event', () => {
    console.log('yes');
})

event1.emit("event")