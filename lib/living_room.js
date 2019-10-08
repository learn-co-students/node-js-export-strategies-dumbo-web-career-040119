// living_room.js

// Note that we can call each module whatever
// we want!
const Decor = require('./lamp');
const powerEvents = require('./power');

const myLamp = new Decor(10);

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);

power.surge(myLamp);
power.outage(myLamp);

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);
