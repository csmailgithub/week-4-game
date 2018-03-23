$(document).ready(function() {


    var random = Math.floor(Math.random() * 101 + 19);
    $("#random-number").text(random);
    
    //these will generate the gems values
    var gem1= Math.floor(Math.random()*11+1)
    var gem2= Math.floor(Math.random()*11+1)
    var gem3= Math.floor(Math.random()*11+1)
    var gem4= Math.floor(Math.random()*11+1)
    
    var Total= 0; 
    var wins= 0;
    var losses = 0;
$('#Wins').text(wins);
$('#Losses').text(losses);


function reset(){
    console.log("You have started a new round,")
    Total= 0;
            
    random = Math.floor(Math.random() * 101 + 19);
    $("#random-number").text(random);
    $('#finalTotal').text(Total);
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
   Total = Total + gem1;
    console.log("New Total= " + Total);
    $('#finalTotal').text(Total); 
        //checks to see is win/loss condition is met
        if (Total === random){
          chickenDinner();
        }
        else if ( Total > random){
          loser();
        }   
})  
$('#green').on ('click', function(){
   Total = Total + gem2;
   console.log("New Total= " + Total);
    $('#finalTotal').text(Total); 
        if (Total === random){
          chickenDinner();
        }
        else if ( Total > random){
          loser();
        } 
})  
  $('#red').on ('click', function(){
    Total = Total + gem3;
    console.log("New Total= " + Total);
    $('#finalTotal').text(Total);
//checks win/loss condition is met
          if (Total === random){
          chickenDinner();
        }
        else if ( Total > random){
          loser();
        } 
  })  
  $('#yellow').on ('click', function(){
    Total = Total + gem4;
    console.log("New Total= " + Total);
    $('#finalTotal').text(Total); 
        if (Total === random){
            chickenDinner();
        }
        else if ( Total > random){
            loser();
        } 
    });
});
