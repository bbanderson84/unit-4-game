
//VARIABLES
var count = 0;

// Assigning random value to target score, between 19 & 20.
var randomNum = Math.floor((Math.random() * 120) + 19);

$("#number-to-guess").html(randomNum);

console.log(randomNum);

// Array with all possible crystal values
var crystalScore = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// assigns random value from array to variable crystal
var crystal = crystalScore[Math.floor(Math.random()*crystalScore.length)];
$("#crystal").append(crystal);
console.log(crystal);

// assigns random value from array to variable diamond
var diamond = crystalScore[Math.floor(Math.random()*crystalScore.length)];
$("#diamond").append(diamond);
console.log(diamond);


// assigns random value from array to variable ruby
var ruby = crystalScore[Math.floor(Math.random()*crystalScore.length)];
$("#ruby").append(ruby);
console.log(ruby);

// assigns random value from array to variable gem
var gem = crystalScore[Math.floor(Math.random()*crystalScore.length)];
$("#gem").append(gem);
console.log(gem);




$("#crystal").click(function() {

var crystalValue = ($(this).attr(crystal));
count += crystalValue;
console.log(crystalValue);
});



// $("#diamond").on("click", function() {

// var diamondValue = ($(this).attr(diamond));
// count += diamondValue;

// });

// $("#ruby").on("click", function() {

//     var rubyValue = ($(this).attr(ruby));
//     count += rubyValue;
    
// });

//  $("#gem").on("click", function() {

//     var gemValue = ($(this).attr(gem));

//    gemValue = parseInt(gemValue);

//     count += gemValue;

    
// });


// console.log(crystalValue);
// console.log(diamondValue);
// console.log(rubyValue);
// console.log(gemValue);


// $("#crystal").append(crystalValue);
// $("#diamond").append(diamondValue);
// $("#ruby").append(rubyValue);
// $("#gem").append(gemValue);

// console.log(crystalValue);


