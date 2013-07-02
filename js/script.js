
$(document).ready(function(){
  var winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

  var player1 = $('#player_one_status');
  var player2 = $('#player_two_status');
  var player1_array = [];
  var player2_array = [];

  var place_marker = function(tile) {
    // if player one's turn...
    if (player2.hasClass("")) {
      // then place 'x' marker on tile clicked, and class="active"
      tile.text('X');
      tile.addClass('active');
    } else {
      tile.text('O');
      tile.addClass('active');
    }
  };

  var pass_tile_id = function(tile) {
    if (player1.hasClass('your_turn')) {
      (player1_array).push(tile.attr('id'));
    } else {
      (player2_array).push(tile.attr('id'));
    }
    // console.log('player1:' + player1_array);
    // console.log('player2:' + player2_array);
  };

  var check_winner =  function(user_array) {
    $.each(winners, function(index, w) {
        counter = 0;
        $.each(w, function(x, tile) {
            if ($.inArray(tile, user_array) > -1) {
              counter++
            }
        });
        if (counter == 3) {
           // match
            console.log('winner');
            console.log(counter);
        } else {
            // console.log('nope')
            console.log(counter);
        }
    });
  };

  var move = function(){
    $('.tile').on('click', function() {
      var tile = $(this);

      if (tile.hasClass('active')) {
        return false
      } else {
        place_marker(tile);
        pass_tile_id(tile);
        check_winner(player1_array);
        check_winner(player2_array);

      // this is player one's turn
      if (player2.hasClass("")) {
          player2.addClass('your_turn');
          player1.removeClass('your_turn');
        } else {
          // this is player two's turn
          player2.removeClass('your_turn');
          player1.addClass('your_turn');
        }
      }
    });
  };

move();



// on click/move pass tile.id into array, and then compare array to winner's array.
// if match, then declare winner
// if no match, and all tiles are not filled, do nothing
// if all tiles filled, declare tie.





});