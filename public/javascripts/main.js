$('#input3').hide();
$('#end').hide();

var rolled = [];
var turn = 1; 

function sendScore(){
    if (turn == 10) {
        $('#input3').show();
    }
    if (turn > 10) {
        $('#input').hide();
        $('#input2').hide();
        $('#input3').hide();
        $('#end').show();
        $('#button').hide();
    }
    var first = $('#input').val();
    var second = $('#input2').val();
    var third = $('#input3').val();
    current = { "first" : first, "second": second, "third": third};
    rolled.push(current);
    $.get( '/score', {frames: rolled}, function(result) {
        var score = result.score;
        $('#results').html(score);
        $('#input').val("");
        $('#input2').val("");
    });
    turn++;
}