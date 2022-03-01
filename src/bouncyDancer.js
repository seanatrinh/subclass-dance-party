var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  // call makeDancer super class with .call to bind bouncyDancer to makeDancer's properties
  this.$node = $('<span class="bouncy-dancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);

makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.slideUp('slow');

};

makeBouncyDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};