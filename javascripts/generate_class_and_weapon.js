var globalSpecies = "";

var Gauntlet = (function(originalGauntlet){
  /*-------------------------
  Generate a goodGuy and an badGuy player
 -------------------------*/

//object is for return both purpose only
var playerObj= {};

/*-----------Generate a goodGuy-----------*/
originalGauntlet.setPlayers= function(){


$("#classesSelection").click(function(event){

  //figure out if the goodGuy is a human, elf, Dwarf or surprise
  switch(event.target.id){
    case "Warrior":
    case "Valkyrie":
    case "Berserker":
    case "Monk":
    playerObj.goodGuy = new originalGauntlet.Combatants.Human();
    //give the selected class to goodGuy.class
    playerObj.goodGuy.class = new originalGauntlet.GuildHall[event.target.id]();
    countBonusIn(playerObj.goodGuy);
    $("#selectWeapon.btn__text").html("Select Weapon");
    break;

    case "Shaman":
    case "Wizard":
    case "Conjurer":
    case "Sorcerer":
    playerObj.goodGuy = new originalGauntlet.Combatants.Elf();
    playerObj.goodGuy.class = new originalGauntlet.GuildHall[event.target.id]();
    countBonusIn(playerObj.goodGuy);
    $("#selectWeapon.btn__text").html("Select Spell");
    $("#weaponOrSpell").html("Spell: ")
    break;

    case "Thief":
    case "Ninja":
    case "Assassin":
    playerObj.goodGuy = new originalGauntlet.Combatants.Dwarf();
    playerObj.goodGuy.class = new originalGauntlet.GuildHall[event.target.id]();
    countBonusIn(playerObj.goodGuy);
    $("#selectWeapon.btn__text").html("Select Weapon");
    break;

    case "surpriseMe":
    randomAssignClassToGoodGuy();
    break;

    default:
    randomAssignClassToGoodGuy();
  };
  globalSpecies = playerObj.goodGuy.species;
});
}

//add healthBonus, strengthBonus and intelligenceBonus to health, strenghth and intelligence
//(this function is for select a class only, not for surprise me (already count in player.js))
countBonusIn= function(player){
  player.health+=player.class.healthBonus||0;
  player.strength+=player.class.strengthBonus||0;
  player.intelligence+=player.class.intelligenceBonus||0;
}
  
  
//if click "surprise me"
randomAssignClassToGoodGuy = function(){
  var random = Math.round(Math.random() * 2);
  switch(random){
    case 0:
    playerObj.goodGuy = new originalGauntlet.Combatants.Human();
    break;

    case 1:
    playerObj.goodGuy = new originalGauntlet.Combatants.Elf();
    break;

    case 2:
    playerObj.goodGuy = new originalGauntlet.Combatants.Dwarf();
    break;
  };
  playerObj.goodGuy.generateClass();
  console.log("randomly generated ", playerObj.goodGuy.species, playerObj.goodGuy.class.name);
}


/*-----------Generate a badGuy-----------*/

var generateBadGuy = function(){
  //randomly picks from 3 possible enemy species
  var x = Math.floor(Math.random() * 3);
  if (x === 0){
    playerObj.badGuy = new originalGauntlet.Combatants.Orc();
    playerObj.badGuy.generateClass();
    // console.log(playerObj.badGuy.class);
    countBonusIn(playerObj.badGuy);
  } else if (x === 1) {
    playerObj.badGuy = new originalGauntlet.Combatants.Undead();
    playerObj.badGuy.generateClass()
    // console.log(playerObj.badGuy.class);
    countBonusIn(playerObj.badGuy);
  } else {
    playerObj.badGuy = new originalGauntlet.Combatants.Goblin();
    playerObj.badGuy.generateClass();
    // console.log(playerObj.badGuy.class);
    countBonusIn(playerObj.badGuy);
  };  
  // then randomly selects weapon for enemy
  var random = Math.floor(Math.random() * 6);
    switch(random){
      case 0:
      playerObj.badGuy.setWeapon(new Dagger());
      break;

      case 1:
      playerObj.badGuy.setWeapon(new BroadSword());
      break;

      case 2:
      playerObj.badGuy.setWeapon(new BattleAxe());
      break;

      case 3:
      playerObj.badGuy.setWeapon(new Flail());
      break;

      case 4:
      playerObj.badGuy.setWeapon(new Hatchet());
      break;

      case 5:
      playerObj.badGuy.setWeapon(new WarSword());
      break;

      case 6:
      playerObj.badGuy.setWeapon(new Spear());
      break;

      case 7:
      playerObj.badGuy.setWeapon(new BattleHammer());
      break;
    };
}
generateBadGuy();


/*-------------------------
  Set Weapon
 -------------------------*/

 // goodGuy's weapon: pick one;
 $("#weaponSelection").click(function(event){
  switch(event.target.id){
    case "Dagger":
    playerObj.goodGuy.setWeapon(new Dagger());
    break;

    case "BroadSword":
    playerObj.goodGuy.setWeapon(new BroadSword());
    break;

    case "BattleAxe":
    playerObj.goodGuy.setWeapon(new BattleAxe());
    break;
  };

})
 $("#spellSelection").click(function(event){
      playerObj.goodGuy.setWeapon(new originalGauntlet.SpellBook.Sphere());
 })


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
    $("#playerInfo").html(playerName+" the "+playerObj.goodGuy.species+" "+playerObj.goodGuy.class.name);
    $("#playerHealth").html(playerObj.goodGuy.health);

    //badGuy's
    $("#orcInfo").html(playerObj.badGuy.species+" "+playerObj.badGuy.class.name);
    $("#orcHealth").html(playerObj.badGuy.health);

    $("#load_Combatants").click(function(){
      $("#playerWeapon").html(playerObj.goodGuy.weapon.name+", ");
      $("#playerWeaponDamage").html(playerObj.goodGuy.weapon.damage);

      $("#orcWeapon").html(playerObj.badGuy.weapon.name+", ");
      $("#orcWeaponDamage").html(playerObj.badGuy.weapon.damage);

      return playerObj;
    })

    $("#load_Combatants_spell").click(function(){
      $("#playerWeapon").html(playerObj.goodGuy.weapon.name+" of "+playerObj.goodGuy.weapon.type+", ");
      $("#playerWeaponDamage").html(playerObj.goodGuy.weapon.damage);
      $("#orcWeapon").html(playerObj.badGuy.weapon.name+", ");
      $("#orcWeaponDamage").html(playerObj.badGuy.weapon.damage);

      return playerObj;
    })
  });
})


//player object getter
originalGauntlet.getPlayers= function(){
  return playerObj;
};

// console.log(playerObj);

  return originalGauntlet;
})(Gauntlet||{})

Gauntlet.setPlayers();


