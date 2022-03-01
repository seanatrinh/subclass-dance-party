var makeCrazyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class ="crazy-dancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeCrazyDancer.prototype = Object.create(makeDancer.prototype);

makeCrazyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // add custom crazy dancer animation here
  // this.$node.effect('bounce', 'slow');
};

makeCrazyDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};