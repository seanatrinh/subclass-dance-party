$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);

    $('.crazy-dancer').mouseover(function() {
      console.log('mouse went over');
      var colorSetting = {
        border: '30px solid rgb(255, 0, 0)'
      };
      this.$node.css(colorSetting);
    });

  });

  $('.addLineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var currentDancer = window.dancers[i];
      currentDancer.lineUp( $('body').width() * 0.1 );
    }
  });

  $('.addInteractButton').on('click', function(event) {
    console.log('clicked');
    for (var i = 0; i < window.dancers.length; i++) {
      var currentDancer = window.dancers[i];
      // if index is 0, set position somehow (maybe similar to add line up button?)
      if (i === 0) {
        currentDancer.setPosition('50%', '50%');
        // argument for lineUp(dancer[1]) =
        // whatever the dancer[0] position + 1, will be the first argument for the next index
      } else {
        var getOffSet = function(firstDancer) {
          // console.log(firstDancer);
          var currentDancerLoc = firstDancer.$node[0].getBoundingClientRect();
          return {
            left: currentDancerLoc.left + window.scrollX,
            top: currentDancerLoc.top + window.scrollY
          };
        };

        var prevDancerLocObj = getOffSet(window.dancers[i - 1]);
        var prevDancerX = prevDancerLocObj.left;
        var prevDancerY = prevDancerLocObj.top;
        console.log(prevDancerX, '||', prevDancerY);

        currentDancer.setPosition(prevDancerX * 0.4, prevDancerY * 0.2);
        // otherwise, set position relative to position of currentDancer[i - 1]1
      }
    }
  });

});

