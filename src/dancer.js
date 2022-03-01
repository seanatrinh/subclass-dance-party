// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // saving a reference for timeBetweenSteps to be used in the step function
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // invoking the step function
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // invoking the setPosition function with top and left arguments
  this.setPosition(top, left);

};

makeDancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // invoking setTimeout with the step function by binding it to this and this.timeBetweenSteps for our wait time
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};