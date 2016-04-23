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

    case "Thief":
    case "Ninja":
    case "Assassin":
    goodGuy = new originalGauntlet.Combatants.Dwarf();
    goodGuy.class = new originalGauntlet.GuildHall[event.target.id]();
    originalGauntlet.countBonusIn(goodGuy);
    break;

    case "surpriseMe":
    originalGauntlet.randomAssignClassToGoodGuy();
    break;
  };

  console.log("GoodGuy's name: ",goodGuy.class.name);
  console.log("GoodGuy's species: ",goodGuy.species);
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

// var baddie;
// var generateBadGuy = function(){
//   var x = Math.floor(Math.random() * 3);
//   if (x === 0){
//     baddie = new originalGauntlet.Combatants.Orc();
//     baddie.generateClass();
//     console.log(baddie);
//     console.log(baddie.species);
//   } else if (x === 1) {
//     baddie = new originalGauntlet.Combatants.Undead();
//     baddie.generateClass()
//     console.log(baddie);
//     console.log(baddie.species);
//   } else {
//     baddie = new originalGauntlet.Combatants.Goblin();
//     baddie.generateClass();
//     console.log(baddie);
//     console.log(baddie.species);
//   };  
//   // badGuy's weapon random generation
//   var random = Math.floor(Math.random() * 3);
//     switch(random){
//       case 0:
//       baddie.setWeapon(new Dagger());
//       break;

//       case 1:
//       baddie.setWeapon(new BroadSword());
//       break;

//       case 2:
//       baddie.setWeapon(new WarAxe());
//       break;
//     };
//   //adjust hands
//   baddie.weapon.damage *= 2/baddie.weapon.hands;
// console.log("baddie's weapon: ",baddie.weapon);
// }
// generateBadGuy();

// var newBadGuy = baddie.generateClass();
// console.log(newBadGuy);
// console.log(newBadGuy.species);



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

// // badGuy's weapon random generation
// var random = Math.round(Math.random() * 2);
//   switch(random){
//     case 0:
//     baddie.setWeapon(new Dagger());
//     break;

//     case 1:
//     baddie.setWeapon(new BroadSword());
//     break;

//     case 2:
//     baddie.setWeapon(new WarAxe());
//     break;
//   };

//   //adjust hands
//   baddie.weapon.damage *= 2/baddie.weapon.hands;

// console.log("baddie's weapon: ",baddie.weapon);

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
    // $("#orcInfo").html("Baddie: "+baddie.class.name);
    // $("#orcHealth").html(baddie.health);

    $("#load_Combatants").click(function(){
      $("#playerWeapon").html(goodGuy.weapon.name+", ");
      $("#playerWeaponDamage").html(goodGuy.weapon.damage);

      // $("#orcWeapon").html(baddie.weapon.name+", ");
      // $("#orcWeaponDamage").html(baddie.weapon.damage);
    })
  });
})






  return originalGauntlet;
})(Gauntlet||{})

