
//GLOBAL VARIABLES
var count = 0;
var userWins = 0;
var userLosses = 0;


/// function starts new game
var newGame = function () {



    $(".crystals").empty();

    var pics = [
                "http://www.i2clipart.com/force_download.php?file=/cliparts/f/6/b/2/256135f6b28f33076659a692e2124de22a214c.png",
                "https://pngimage.net/wp-content/uploads/2018/05/blue-crystal-png-5.png", 
                "http://www.anchorageprogramming.org/wp-content/uploads/ruby.png",
                "https://vignette.wikia.nocookie.net/azure-mines/images/1/14/Topaz_Ore_IRL.png/revision/latest?cb=20170107052336"];


    // // Assigning random value to target score, between 19 & 120, prints score to page.
            
    var randomNum = Math.floor((Math.random() * 120) + 19);

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

$(document).on('click', ".crystal", function () {

    console.log($(this).attr("crystalvalue"));

    var crystalValue = ($(this).attr("crystalvalue"));

    crystalValue = parseInt(crystalValue);

    count += crystalValue;

    console.log(count);

    $("#user-score").html(count);

    if(count > randomNum){

        userLosses++;
        console.log(userLosses);
        alert("YOU LOST!");

        count = 0;

        $("#user-losses").html(userLosses);

        newGame();

    } 
    
    else if(count === randomNum){

        alert("YOU WON!");

        userWins++; 
        console.log(userWins);
        count = 0;

        $("#user-wins").html(userWins);

        newGame();

        
    }
    
});

//     var crystalValue = ($(this).attr("valueofcrystal"));

//     crystalValue = parseInt(crystalValue);

//     count += crystalValue;

//     console.log(count);

//     $("#user-score").html(count);

//     if (count > randomNum) {

//         alert("YOU LOST!");

//     } else if (count === randomNum) {

//         alert("YOU WON!");
//     }

// });

// });


//     for (var i = 0; i < 4; i++) {

//         var crystalPoints = Math.floor((Math.random() * 12) + 1);

//         console.log(crystalPoints);

//         var crystal = $("#crystalPic");

//             crystal.attr({"id": "crystalPic", "data-valuecrystal": crystalPoints});

//             $("#crystals").append(crystal);
//     }

// // for loop assigning random number from 1-12 to the diamond picture
//     for (var i = 0; i < 1; i++) {

//         var diamondPoints = Math.floor((Math.random() * 12) + 1);

//         console.log(diamondPoints);

//         var diamond = $("#diamondPic");

//              diamond.attr({"id": "diamondPic", "data-valuediamond": diamondPoints});

//             $("#diamonds").append(diamond);

//     }

// // for loop assigning random number from 1-12 to the ruby picture
//     for (var i = 0; i < 1; i++){

//         var rubyPoints = Math.floor((Math.random() * 12) + 1);

//         console.log(rubyPoints);

//         var ruby = $("#rubyPic");

//             ruby.attr({"id": "rubyPic", "data-valueruby": rubyPoints});

//             $("#rubys").append(ruby);


//     }

// // for loop assigning random number from 1-12 to the gem picture
//     for (var i = 0; i < 1; i++){

//         var gemPoints = Math.floor((Math.random() * 12) + 1);

//         console.log(gemPoints);

//         var gem = $("#gemPic");

//             gem.attr({"id": "gemPic", "data-valuegem": gemPoints});

//             $("#gems").append(gem);

//     }

// // }

// // gameStart ();

// // logs when user clicks crystal pic
//     $("#crystalPic").on("click", function () {

//         var crystalValue = ($(this).attr("data-valuecrystal"));

//         crystalValue = parseInt(crystalValue);

//         count += crystalValue;

//         console.log(count);

//         $("#user-score").html(count);


//     // console.log($(this).attr("data-valuecrystal"));
    
// });

// // logs when user clicks diamond pic
// $("#diamondPic").on("click", function () {

//     var diamondValue = ($(this).attr("data-valuediamond"));

//     diamondValue = parseInt(diamondValue);

//     count += diamondValue;

//     console.log(count);

//     $("#user-score").html(count);
    
// });

// // logs when user clicks ruby pic
// $("#rubyPic").on("click", function () {


//     var rubyValue = ($(this).attr("data-valueruby"));

//     rubyValue = parseInt(rubyValue);

//     count += rubyValue;

//     console.log(count);

//     $("#user-score").html(count);

    
// });

// // logs when user clicks gem pic
// $("#gemPic").on("click", function () {

//     // console.log($(this).attr("data-valuegem"));

//     var gemValue = ($(this).attr("data-valuegem"));

//     gemValue = parseInt(gemValue);

//     count += gemValue;   

//     console.log(count);

//     $("#user-score").html(count);


//     if (count > randomNum) {

//         alert("YOU LOST!");

//         userLosses++;

//         console.log(userLosses);

//         $("#user-losses").html(userLosses);


//     }  else if (count === randomNum) {

//         alert("YOU WON!");

//         userWins++;

//         console.log(userWins);

//         $("user-wins").html(userWins);

    
//             // $("#user-losses").html(userLosses);
    
//         }

    
// });


// $(document).ready( function () {

    //     if (count > randomNum) {

    //         alert("YOU LOST!");

    //         userWins++;

    //         console.log(userWins);

    //         // $("#user-wins").html(userWins);


    // }  else if (count === randomNum) {

    // // alert("Sorry, You Lose. Try again!");


    //      userLosses++;

    //     // $("#user-losses").html(userLosses);

    // }
// });
