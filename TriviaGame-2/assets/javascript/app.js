var score = 0;
var wasClicked = 0;
var gifId = 0;
// Waits for <input> to be clicked, saves object as wasClicked to be checked by updateScore()
$('.main > div > span > input').click(function() {
console.log($(this).attr('id'));
wasClicked = $(this);
gifId = wasClicked.attr('id');
console.log(gifId);
updateScore();
});

/*
    http://html-tuts.com/jquery-this-selector/
    $('.sampleList > li > a').click(function() {
    $(this).parent().toggleClass('sampleClass');
    return false;
    });
*/
$('.finishbttn').on('click',function(){
    $('.blank').empty();
    var end = '<hr><p>You got ' + score + ' out of 5 questions right!</p><img class="gameover" src="https://media.giphy.com/media/fxnF2NswlLlxvwGYEn/giphy.gif"/>'
    $('.blank').append(end);
})
// Updates score when opiton button clicked
// Should hold total score and change based on how many class='correct' are selected
function updateScore() {
    //(wasClicked.hasClass('correct') ? console.log('Selected Correct Answer') : console.log('Selected Incorrect Answer'))
    (wasClicked.hasClass('correct') && !wasClicked.hasClass('selected') ? score++ : score=score);
    wasClicked.attr('class','selected');
    console.log(score);
    callGiphy();
    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    //  (isMember ? "$2.00" : "$10.00")
}

// GIPHY integration
function callGiphy() {
    var APIKey = "OrGsAQPACjDG7CuKA31b1bSM9ZqDShC3";
    // Here we are building the URL we need to query the database
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+gifId+"&api_key="+APIKey+"&limit=1";
    
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    console.log(response);
    console.log(response.data[0].embed_url);
    var ima = response.data[0].images.fixed_height.url;
    $('.gifs').html('<img src='+ima+'/>');
    });
}
