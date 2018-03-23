$(document).ready(function() {


    var random = Math.floor(Math.random() * 101 + 19);
    $("#random-number").text(random);
    
    //these will generate the gems values
    var gem1= Math.floor(Math.random()*11+1)
    var gem2= Math.floor(Math.random()*11+1)
    var gem3= Math.floor(Math.random()*11+1)
    var gem4= Math.floor(Math.random()*11+1)
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
$('#Wins').text(wins);
$('#Losses').text(losses);


function reset(){
    console.log("You have started a new round,", reset)
    userTotal= 0;
            
    random = Math.floor(Math.random() * 101 + 19);
    $("#random-number").text(random);
    $('#finalTotal').text(userTotal);
        //resets the gem values...hopefully
    var gem1= Math.floor(Math.random()*11+1)
    var gem2= Math.floor(Math.random()*11+1)
    var gem3= Math.floor(Math.random()*11+1)
    var gem4= Math.floor(Math.random()*11+1)
        
} 
function chickenDinner(){
wins++; 
$('#Wins').text(wins);
alert("Winner Winner Chicken Dinner!");
reset();
}
    function loser() {
        alert ("Bust!");
  losses++;
  $('#Losses').text(losses);
  reset()
    }
//click events for gems
$('#blue').on ('click', function(){
   userTotal = userTotal + gem1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        //checks to see is win/loss condition is met
        if (userTotal === random){
          chickenDinner();
        }
        else if ( userTotal > random){
          loser();
        }   
})  
$('#green').on ('click', function(){
   userTotal = userTotal + gem2;
   console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal === random){
          chickenDinner();
        }
        else if ( userTotal > random){
          loser();
        } 
})  
  $('#red').on ('click', function(){
    userTotal = userTotal + gem3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//checks win/loss condition is met
          if (userTotal === random){
          chickenDinner();
        }
        else if ( userTotal > random){
          loser();
        } 
  })  
  $('#yellow').on ('click', function(){
    userTotal = userTotal + gem4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal === random){
            chickenDinner();
        }
        else if ( userTotal > random){
            loser();
        } 
    });
});
