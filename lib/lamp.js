// lamp.js

const Lamp = function Lamp(maxBrightness) {
  this.currentBrightness = 0;
  this.maxBrightness = maxBrightness;
};

Lamp.prototype.brightness = function(amount) {
  amount = amount || 1;

  this.currentBrightness += amount;

  if (this.currentBrightness > this.maxBrightness) {
    this.currentBrightness = this.maxBrightness;
  }
};

Lamp.prototype.dim = function(amount) {
  amount = amount || 1;

  this.currentBrightness -= amount;

  if (this.currentBrightness < 0) {
    this.currentBrightness = 0;
  }
};

Lamp.prototype.turnOn = function() {
  this.currentBrightness = this.maxBrightness;
}

module.exports = Lamp.js;
