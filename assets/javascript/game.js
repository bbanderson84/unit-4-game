
//GLOBAL VARIABLES
var count = 0;
var userWins = 0;
var userLosses = 0;
var randomNum;

$(document).ready (function () {


/// function starts new game
    var newGame = function () {

    $(".crystals").empty();

    var pics = [
                "http://www.i2clipart.com/force_download.php?file=/cliparts/f/6/b/2/256135f6b28f33076659a692e2124de22a214c.png",
                "https://pngimage.net/wp-content/uploads/2018/05/blue-crystal-png-5.png", 
                "http://www.anchorageprogramming.org/wp-content/uploads/ruby.png",
                "https://vignette.wikia.nocookie.net/azure-mines/images/1/14/Topaz_Ore_IRL.png/revision/latest?cb=20170107052336"];


    // // Assigning random value to target score, between 19 & 120, prints score to page.
            
    randomNum = Math.floor((Math.random() * 120) + 19);

    $("#number-to-guess").html(randomNum);

    console.log(randomNum);



// for loop assigning random number from 1-12 to each crystal div picture

    for (var i = 0; i < 4; i++) {

        var crystalPoints = Math.floor(Math.random() * 12) + 1;

         console.log(crystalPoints);

        var crystal = $("<div>");

        // assigns each div image from array for crystal, assigns class  and value to each one
        crystal.css({"background-image":"url('" + pics[i] + "')", "background-size":"cover"});
        
        crystal.attr({"class": "crystal","crystalvalue": crystalPoints});

        $(".crystals").append(crystal);

    }

}

newGame();

// clicking on each crystal adds that specific crystals value to the user score
$(document).on('click', ".crystal", function () {
    console.log(randomNum);

    console.log($(this).attr("crystalvalue"));

    var crystalValue = ($(this).attr("crystalvalue"));

    crystalValue = parseInt(crystalValue);

    count += crystalValue;

    console.log(count);

    $("#user-score").html(count);

    console.log('-------------------------------------')
    console.log('randomNum: ', randomNum)
    console.log('count: ', count);
    console.log('-------------------------------------')

    // checks if the count is larger than the random number given, if it is, adds loss, alerts user they lost and restarts game and values.
    if (count > randomNum) {

        userLosses++;
     
        alert("YOU LOST!");

        count = 0;

        $("#user-losses").html(userLosses);

        newGame();

    } 
    
        // checks if the count is equal to  the random number given, if it is, adds win, alerts user they won and restarts game and values.

    else if (count === randomNum) {

        alert("YOU WON!");

        userWins++; 
  
        count = 0;

        $("#user-wins").html(userWins);

        newGame();

        
    }
    
});

});

