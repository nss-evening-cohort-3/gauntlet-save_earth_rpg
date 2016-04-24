/*
  TODO: Modularize this code with IIFE or Browserify
 */

var Gauntlet = (function(originalGauntlet){
originalGauntlet.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
originalGauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 150);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

originalGauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

originalGauntlet.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new originalGauntlet.GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  // NEW ADDED BY SYLVIA (I just feel if add health, let's just add strength and intelligence too)
  this.strength+= this.class.strengthBonus||0;
  this.intelligence+= this.class.intelligenceBonus||0;
  return this.class;
};

/*
  Define the base properties for a human in a 
  constructor function.
 */

//HUMAN

originalGauntlet.Combatants.Human = function() {
  var randomSkin;

  this.species = "Human";
  this.intelligence = this.health + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
};
originalGauntlet.Combatants.Human.prototype = new originalGauntlet.Combatants.Player();

//ELF

originalGauntlet.Combatants.Elf = function() {
  var randomSkin;

  this.species = "Elf";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("grey", "green", "tan", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Wizard", "Conjurer", "Sorcerer", "Shaman"];
};
originalGauntlet.Combatants.Elf.prototype = new originalGauntlet.Combatants.Player();

//DWARF

originalGauntlet.Combatants.Dwarf = function() {
  var randomSkin;

  this.species = "Dwarf";
  this.strength = this.strength + 20;

  this.skinColors.push("brown", "freckled", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Thief", "Ninja", "Assassin"];
};
originalGauntlet.Combatants.Dwarf.prototype = new originalGauntlet.Combatants.Player();


/*
  Define the base properties for a monster in a 
  constructor function.
 */
originalGauntlet.Combatants.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

originalGauntlet.Combatants.Monster.prototype = new originalGauntlet.Combatants.Player();







  return originalGauntlet
})(Gauntlet || {})










