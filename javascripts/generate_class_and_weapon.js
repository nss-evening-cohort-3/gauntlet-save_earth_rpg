var Gauntlet = (function(originalGauntlet){
  /*-------------------------
  Generate a goodGuy and an orc player
 -------------------------*/

/*-----------Generate a goodGuy-----------*/
var goodGuy;
$("#classesSelection").click(function(event){

  //figure out if the goodGuy is a human, elf, Dwarf or surprise
  switch(event.target.id){
    case "Warrior":
    case "Valkyrie":
    case "Berserker":
    case "Monk":
    goodGuy = new originalGauntlet.Combatants.Human();
    //give the selected class to goodGuy.class
    goodGuy.class = new originalGauntlet.GuildHall[event.target.id]();
    originalGauntlet.countBonusIn(goodGuy);
    
    break;

    case "Shaman":
    case "Wizard":
    case "Conjurer":
    case "Sorcerer":
    goodGuy = new originalGauntlet.Combatants.Elf();
    goodGuy.class = new originalGauntlet.GuildHall[event.target.id]();
    originalGauntlet.countBonusIn(goodGuy);
    break;

    case "Warrior":
    case "Valkyrie":
    case "Berserker":
    goodGuy = new originalGauntlet.Combatants.Dwarf();
    goodGuy.class = new originalGauntlet.GuildHall[event.target.id]();
    originalGauntlet.countBonusIn(goodGuy);
    break;

    case "surpriseMe":
    originalGauntlet.randomAssignClassToGoodGuy();
    break;
  };

  console.log("GoodGuy's name: ",goodGuy.class.name);
  console.log("GoodGuy's health",goodGuy.health);
  console.log("GoodGuy's strength",goodGuy.strength);
  console.log("GoodGuy's intelligence",goodGuy.intelligence);
});


//add healthBonus, strengthBonus and intelligenceBonus to health, strenghth and intelligence
//(this function is for select a class only, not for surprise me (already count in player.js))
originalGauntlet.countBonusIn= function(player){
  player.health+=goodGuy.class.healthBonus||0;
  player.strength+=goodGuy.class.strengthBonus||0;
  player.intelligence+=goodGuy.class.intelligenceBonus||0;
}
  
  
//if click "surprise me"
originalGauntlet.randomAssignClassToGoodGuy = function(){
  var random = Math.round(Math.random() * 3);
  switch(random){
    case 0:
    goodGuy = new originalGauntlet.Combatants.Human();

    break;

    case 1:
    goodGuy = new originalGauntlet.Combatants.Elf();
    break;

    case 2:
    goodGuy = new originalGauntlet.Combatants.Dwarf();
    break;
  };

  //generate class
  goodGuy.generateClass();
}
// console.log(goodGuy.toString());


/*-----------Generate a badGuy-----------*/
var orc = new originalGauntlet.Combatants.Orc();
orc.generateClass();
// console.log(orc.toString());



/*-------------------------
  Set Weapon
 -------------------------*/

 // goodGuy's weapon: pick one;
 $("#weaponSelection").click(function(event){
  switch(event.target.id){
    case "Dagger":
    goodGuy.setWeapon(new Dagger());
    break;

    case "BoardSword":
    goodGuy.setWeapon(new BroadSword());
    break;

    case "WarAxe":
    goodGuy.setWeapon(new WarAxe());
    break;
  };

  //if hands=1, then give two same weapon, which means damage*2
  goodGuy.weapon.damage *= 2/goodGuy.weapon.hands;
  console.log("goodGuy's weapon: ", goodGuy.weapon);
 })

// badGuy's weapon random generation
var random = Math.round(Math.random() * 3);
  switch(random){
    case 0:
    orc.setWeapon(new Dagger());
    break;

    case 1:
    orc.setWeapon(new BroadSword());
    break;

    case 2:
    orc.setWeapon(new WarAxe());
    break;
  };

  //adjust hands
  orc.weapon.damage *= 2/orc.weapon.hands;

console.log("badGuy's weapon: ",orc.weapon);

// NEED TO GENERATE SPELL??



/*------------------------------
  battleGround page initial set up
 -------------------------------*/

//capture playerName after clicking Select Class
$("#selectClass").click(function(){
  var playerName=$("#player-name").val();

  //capture player className and health after clicking select weapon
  $("#selectWeapon").click(function(){

    //goodGuy's
    $("#playerInfo").html(playerName+": "+goodGuy.class.name);
    $("#playerHealth").html(goodGuy.health);

    //orc's
    $("#orcInfo").html("Orc: "+orc.class.name);
    $("#orcHealth").html(orc.health);

    $("#load_Combatants").click(function(){
      $("#playerWeapon").html(goodGuy.weapon.name+", ");
      $("#playerWeaponDamage").html(goodGuy.weapon.damage);

      $("#orcWeapon").html(orc.weapon.name+", ");
      $("#orcWeaponDamage").html(orc.weapon.damage);
    })
  });
})






  return originalGauntlet;
})(Gauntlet||{})

