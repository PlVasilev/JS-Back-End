const events = require('events');

const publisher = new events.EventEmitter();

publisher.on('ping', firstHandler);
publisher.on('ping', secondHandler);
publisher.on('ping', thirdHandler);

function firstHandler(msg){
    console.log('first', msg);
}

function secondHandler(msg){
    console.log('second', msg.length);
}

function thirdHandler(a , b){
    console.log('third', a + b);
}

console.log('beffore');
publisher.emit('ping', "SoftUni");
console.log('after');
publisher.emit('pong', 3, 3);