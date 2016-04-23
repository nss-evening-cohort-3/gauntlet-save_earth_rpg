var Gauntlet = (function(originalGauntlet){
            
var battleStarted = false;
var attackRoundCounter = 1;
var newPlayerHealth;

// Clicking the button to take you to the battleground loads the two Combatants
// $("#load_Combatants").click(function(){
    
    // console.log(orc);


//     // new good guy. NOTE THAT THIS WILL BE BUILT WITH THE SERIES OF QUESTIONS GOING FORWARD.
//     var tedTheHuman = new originalGauntlet.Combatants.Human();
//     tedTheHuman.setWeapon(new WarAxe());
//     tedTheHuman.generateClass();  // This will be used for "Surprise me" option
//     $("#playerHealth").html(tedTheHuman.health.toString());
//     // $("#playerInfo").html(tedTheHuman.name.toString());
//     $("#playerWeapon").html(tedTheHuman.weapon.toString());
//     // $("#playerSpell").html(spell.toString()); //Need to connect player spell 
//     console.log(tedTheHuman.toString());
//     player = tedTheHuman;

//     // new bad guy
//     var evanTheOrc = new originalGauntlet.Combatants.Orc();
//     evanTheOrc.generateClass();
//     evanTheOrc.setWeapon(new BroadSword());
//     $("#orcHealth").html(evanTheOrc.health.toString());
//     // $("#orcInfo").html(evanTheOrc.name.toString());
//     $("#orcWeapon").html(evanTheOrc.weapon.toString());   
//     console.log(tedTheHuman, evanTheOrc);
//     orc = evanTheOrc;

// });

$("#attack").click(function(){
    var twoPlayers= Gauntlet.getPlayers();
    var player=twoPlayers.goodGuy;
    var orc= twoPlayers.orc;

    battleStarted = true;
    orcAttack();
    playerAttack();
    attackRoundCounter++;


    function orcAttack() {
        player.health = (player.health - orc.weapon.damage);
        $("#playerHealth").html(player.health.toString());
        announceWinner();
    };

    function playerAttack() {
        orc.health = (orc.health - player.weapon.damage);
        $("#orcHealth").html(orc.health.toString());
        announceWinner();
    };

    // when player or orc reaches zero, disable button and announce the winner
    function announceWinner() {
        if (orc.health <= 0) {
            $("#attack").prop("disabled", true);
            alert("Congratulations! You are the winner!");
        } else if (player.health <= 0) {
            $("#attack").prop("disabled", true);
            alert("You lose!");
        }
    };
});


   return originalGauntlet
})(Gauntlet || {})


