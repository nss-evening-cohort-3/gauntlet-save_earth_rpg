var Gauntlet = (function(originalGauntlet){
var playersObj = {};
var enemy;
var player;             
var battleStarted = false;
var attackRoundCounter = 1;
var newPlayerHealth;

// Clicking the button to take you to the battleground loads the two Combatants
$("#load_Combatants").click(function(){
    playersObj = originalGauntlet.getPlayers();
    enemy = playersObj.badGuy;
    player = playersObj.goodGuy;
});

$("#attack").click(function(){
    battleStarted = true;
    enemyAttack();
    playerAttack();
    announceWinner();
    attackRoundCounter++;
});

function enemyAttack() {
    //checks for 1-h weapons, mulitplies them by 2
    if (enemy.weapon.hands === 1){
        player.health = (player.health - (enemy.weapon.damage * 2));
        $("#playerHealth").html(player.health.toString());
    } else {
        player.health = (player.health - enemy.weapon.damage);
        $("#playerHealth").html(player.health.toString());
    }
};

function playerAttack() {
    //checks for 1-h weapons, mulitplies them by 2
    if (player.weapon.hands === 1){
        enemy.health = (enemy.health - (player.weapon.damage * 2));
        $("#orcHealth").html(enemy.health.toString());
    } else {
        enemy.health = (enemy.health - player.weapon.damage);
        $("#orcHealth").html(enemy.health.toString());
    }
};

function announceWinner() {
    if (enemy.health <= 0) {
        $("#attack").prop("disabled", true);
        alert("Congratulations! You are the winner!");
    } else if (player.health <= 0) {
        $("#attack").prop("disabled", true);
        alert("You lose!");
    }
};


   return originalGauntlet
})(Gauntlet || {})


