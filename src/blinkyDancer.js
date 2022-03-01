var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // calling makeDancer superclass with .call to bind blinkyDance to makeDancer's properties
  this.$node = $('<span class="blinky-dancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
};

// add makeDancer's methods to makeBlinkyDancer
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.step = function() {
  // call makeDancer's step on this
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

makeBlinkyDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};