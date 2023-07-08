var colors=["red","blue","green","yellow"];
var game=[];
var userClick=[];
var level=0;
var started=false;


$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function() {
  
    var ranColor=$(this).attr("id");
    userClick.push(ranColor);
   
   playSound(ranColor);
    animatePress(ranColor);
    
    checkAnswer(userClick.length-1);
    
      
    }
  

);

  function checkAnswer(currentLevel) {

    if (game[currentLevel] === userClick[currentLevel]) {
      if (userClick.length === game.length){
        setTimeout(function () {
        
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

function nextSequence()
{userClick=[];
  level++;
  $("#level-title").text("Level " + level);
 var randomNum=Math.floor(Math.random()*4);
  var chosenColor=colors[randomNum];
  game.push(chosenColor);
  $("#"+chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(chosenColor);
  
}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
function animatePress(currentColor) {
   $("#"+currentColor).addClass("pressed");
   setTimeout(function()
   {
    $("#"+currentColor).removeClass("pressed")
   },100)
  }
  function startOver() {
    level = 0;
    game= [];
    started = false;
  }
