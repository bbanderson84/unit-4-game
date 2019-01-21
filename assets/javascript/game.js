
//GLOBAL VARIABLES
var count = 0;
var userWins = 0;
var userLosses = 0;

// // Assigning random value to target score, between 19 & 120.

$(document).ready( function() {

    var randomNum = Math.floor((Math.random() * 120) + 19);

    $("#number-to-guess").html(randomNum);

    console.log(randomNum);


// var gameStart = function () {
// for loop assigning random number from 1-12 to the crystal picture
    for (var i = 0; i < 1; i++) {

        var crystalPoints = Math.floor((Math.random() * 12) + 1);

        console.log(crystalPoints);

        var crystal = $("#crystalPic");

            crystal.attr({"id": "crystalPic", "data-valuecrystal": crystalPoints});

            $("#crystals").append(crystal);
    }

// for loop assigning random number from 1-12 to the diamond picture
    for (var i = 0; i < 1; i++) {

        var diamondPoints = Math.floor((Math.random() * 12) + 1);

        console.log(diamondPoints);

        var diamond = $("#diamondPic");

             diamond.attr({"id": "diamondPic", "data-valuediamond": diamondPoints});

            $("#diamonds").append(diamond);

    }

// for loop assigning random number from 1-12 to the ruby picture
    for (var i = 0; i < 1; i++){

        var rubyPoints = Math.floor((Math.random() * 12) + 1);

        console.log(rubyPoints);

        var ruby = $("#rubyPic");

            ruby.attr({"id": "rubyPic", "data-valueruby": rubyPoints});

            $("#rubys").append(ruby);


    }

// for loop assigning random number from 1-12 to the gem picture
    for (var i = 0; i < 1; i++){

        var gemPoints = Math.floor((Math.random() * 12) + 1);

        console.log(gemPoints);

        var gem = $("#gemPic");

            gem.attr({"id": "gemPic", "data-valuegem": gemPoints});

            $("#gems").append(gem);

    }

// }

// gameStart ();

// logs when user clicks crystal pic
    $("#crystalPic").on("click", function () {

        var crystalValue = ($(this).attr("data-valuecrystal"));

        crystalValue = parseInt(crystalValue);

        count += crystalValue;

        console.log(count);

        $("#user-score").html(count);


    // console.log($(this).attr("data-valuecrystal"));
    
});

// logs when user clicks diamond pic
$("#diamondPic").on("click", function () {

    var diamondValue = ($(this).attr("data-valuediamond"));

    diamondValue = parseInt(diamondValue);

    count += diamondValue;

    console.log(count);

    $("#user-score").html(count);
    
});

// logs when user clicks ruby pic
$("#rubyPic").on("click", function () {


    var rubyValue = ($(this).attr("data-valueruby"));

    rubyValue = parseInt(rubyValue);

    count += rubyValue;

    console.log(count);

    $("#user-score").html(count);

    
});

// logs when user clicks gem pic
$("#gemPic").on("click", function () {

    // console.log($(this).attr("data-valuegem"));

    var gemValue = ($(this).attr("data-valuegem"));

    gemValue = parseInt(gemValue);

    count += gemValue;   

    console.log(count);

    $("#user-score").html(count);

    
});


// $(document).ready( function () {

        if (count === randomNum) {

            alert("YOU WON!");

            userWins++;

            $("#user-wins").html(userWins);


    }  else if (count > randomNum) {

    // alert("Sorry, You Lose. Try again!");

         userLosses++;

        $("#user-losses").html(userLosses);

    }
});
















