var Gauntlet = (function(originalGauntlet){
var baddie;
var player;             
var battleStarted = false;
var attackRoundCounter = 1;
var newPlayerHealth;

// Clicking the button to take you to the battleground loads the two Combatants
$("#load_Combatants").click(function(){
    var generateBadGuy = function(){
  var x = Math.floor(Math.random() * 3);
  if (x === 0){
    baddie = new originalGauntlet.Combatants.Orc();
    baddie.generateClass();
    console.log(baddie);
    console.log(baddie.species);
  } else if (x === 1) {
    baddie = new originalGauntlet.Combatants.Undead();
    baddie.generateClass()
    console.log(baddie);
    console.log(baddie.species);
  } else {
    baddie = new originalGauntlet.Combatants.Goblin();
    baddie.generateClass();
    console.log(baddie);
    console.log(baddie.species);
  };  
  // badGuy's weapon random generation
  var random = Math.floor(Math.random() * 3);
    switch(random){
      case 0:
      baddie.setWeapon(new Dagger());
      break;

      case 1:
      baddie.setWeapon(new BroadSword());
      break;

      case 2:
      baddie.setWeapon(new WarAxe());
      break;
    };
  //adjust hands
  baddie.weapon.damage *= 2/baddie.weapon.hands;
console.log("baddie's weapon: ",baddie.weapon);
}
generateBadGuy();
});

$("#attack").click(function(){
    battleStarted = true;
    orcAttack();
    playerAttack();
    attackRoundCounter++;
});

function orcAttack() {
    // console.log(baddie);
    player.health = (player.health - (baddie.weapon.damage * baddie.weapon.hands));
    $("#playerHealth").html(player.health.toString());
    announceWinner();
};

function playerAttack() {
    baddie.health = (baddie.health - (player.weapon.damage * player.weapon.hands));
    $("#orcHealth").html(baddie.health.toString());
    announceWinner();
};

function announceWinner() {
    if (baddie.health <= 0) {
        $("#attack").prop("disabled", true);
        alert("Congratulations! You are the winner!");
    } else if (player.health <= 0) {
        $("#attack").prop("disabled", true);
        alert("You lose!");
    }
};

// when player or orc reaches zero, disable button and announce the winner

   return originalGauntlet
})(Gauntlet || {})