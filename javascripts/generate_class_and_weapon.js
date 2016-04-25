var globalSpecies = "";

var Gauntlet = (function(originalGauntlet){
  /*-------------------------
  Generate a goodGuy and an orc player
 -------------------------*/

//object is for return both purpose only
var playerObj= {};
var goodGuy;
var orc;

/*-----------Generate a goodGuy-----------*/
originalGauntlet.setPlayers= function(){


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
    countBonusIn(goodGuy);
    
//    originalGauntlet.countBonusIn(goodGuy);
    break;

    case "Shaman":
    case "Wizard":
    case "Conjurer":
    case "Sorcerer":
    goodGuy = new originalGauntlet.Combatants.Elf();
    goodGuy.class = new originalGauntlet.GuildHall[event.target.id]();
    countBonusIn(goodGuy);
    break;

    case "Thief":
    case "Ninja":
    case "Assassin":
    goodGuy = new originalGauntlet.Combatants.Dwarf();
    goodGuy.class = new originalGauntlet.GuildHall[event.target.id]();
    countBonusIn(goodGuy);
    break;

    case "surpriseMe":
    randomAssignClassToGoodGuy();
    break;
  };

  globalSpecies = goodGuy.species;
});


//add healthBonus, strengthBonus and intelligenceBonus to health, strenghth and intelligence
//(this function is for select a class only, not for surprise me (already count in player.js))
countBonusIn= function(player){
  player.health+=goodGuy.class.healthBonus||0;
  player.strength+=goodGuy.class.strengthBonus||0;
  player.intelligence+=goodGuy.class.intelligenceBonus||0;
}
  
  
//if click "surprise me"
randomAssignClassToGoodGuy = function(){
  var random = Math.round(Math.random() * 2);
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
orc = new originalGauntlet.Combatants.Orc();
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
  // console.log("goodGuy's weapon: ", goodGuy.weapon);
 })

$("#spellSelection").click(function(event){
    switch(event.target.id){
      case "Sphere":
      goodGuy.setWeapon(new originalGauntlet.SpellBook.Sphere());
      // console.log("goodGuy's weaponfff: ", goodGuy.weapon.name);
      break;
    }
  })

// badGuy's weapon random generation
var random = Math.round(Math.random() * 2);
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
      alert(goodGuy.weapon.name);
      $("#playerWeapon").html(goodGuy.weapon.name+", ");
      $("#playerWeaponDamage").html(goodGuy.weapon.damage);

      $("#orcWeapon").html(orc.weapon.name+", ");
      $("#orcWeaponDamage").html(orc.weapon.damage);

      playerObj.goodGuy = goodGuy;
      playerObj.orc= orc;

      return playerObj;
    })

    $("#load_Combatants_spell").click(function(){
      alert(goodGuy.weapon.name);
      $("#playerWeapon").html(goodGuy.weapon.name+", ");
      $("#playerWeaponDamage").html(goodGuy.weapon.damage);

      $("#orcWeapon").html(orc.weapon.name+", ");
      $("#orcWeaponDamage").html(orc.weapon.damage);

      playerObj.goodGuy = goodGuy;
      playerObj.orc= orc;

      return playerObj;
    })
  });
})

};

originalGauntlet.getPlayers= function(){
  return playerObj;
};



  return originalGauntlet;
})(Gauntlet||{})

Gauntlet.setPlayers();


