
const dice = 
{
    dieSides:[
        ["dice_one.png",1],
        ["dice_two.png",2],
        ["dice_three.png",3],
        ["dice_four.png",4],
        ["dice_five.png",5],
        ["dice_six.png",6]
    ],

    roll: function() {
        let randomDie = Math.floor(Math.random()*(7-1)) + 1;
            for(var i = 0; i <= 6; i++){
                if(randomDie == dice.dieSides[i][1]) {
                    return dice.dieSides[i][0];
                }
            }                   
    }
} 
var numDice;
var rolls = document.getElementById("roll");
var die = document.getElementsByClassName("dice_images");
rolls.addEventListener("click", function(){
    
    numDice = 0;
   for(var x = 1; x <= 6; x++){
            var checkStrings = document.getElementById("dice_score_block" + x).innerHTML;
            if(checkStrings.indexOf("<img") === -1){
                numDice = numDice + 1;
                console.log(numDice);
            }else {
                document.getElementById("dice_score_block" + x).innerHTML = "";
                console.log("delete");
            }    
        }

        if(numDice !== 6){
            numDice = 6 - numDice;
        } 
    for(var i = 1; i <= numDice; i++){
        var diceHtml = '<img class="dice_images" src="assets/images/';
        var diceRoll;
        
        diceRoll = dice.roll();
        diceHtml = diceHtml + diceRoll + '">';
        document.getElementById("dice_roll_block" + i ).innerHTML = diceHtml;
        console.log(diceHtml);
    }
    for(var i = 0; i < die.length; i++) {
    die[i].addEventListener("click", function(){
        var scoreHtml = this.parentElement.innerHTML;
        this.parentElement.innerHTML = "";
        for(var j = 1; j <= 6; j++){
            var checkString = document.getElementById("dice_score_block" + j).innerHTML;
            
            checkString.trim();
            if(checkString.indexOf("<img") === -1){
                 document.getElementById("dice_score_block" + j).innerHTML = scoreHtml;

                console.log(checkString);
                return;
            }else{
                console.log(checkString);
                
            }
                
        }
        
    });
}
});



