var Gauntlet = (function(originalGauntlet){

originalGauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Valkyrie", "Berserker", "Monk"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new originalGauntlet.GuildHall[randomClass]();
    return this.class;
  }
};

originalGauntlet.Combatants.Orc.prototype = new originalGauntlet.Combatants.Monster();


originalGauntlet.Combatants.Undead = function() {
  this.health = this.health + 20;
  this.species = "Undead";
  this.allowedClasses = ["Shaman", "Wizard", "Sorcerer", "Conjurer"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new originalGauntlet.GuildHall[randomClass]();
    return this.class;
  }
};

originalGauntlet.Combatants.Undead.prototype = new originalGauntlet.Combatants.Monster();


originalGauntlet.Combatants.Goblin = function() {
  this.health = this.health + 20;
  this.species = "Goblin";
  this.allowedClasses = ["Thief", "Ninja", "Assassin"];
  
  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new originalGauntlet.GuildHall[randomClass]();
    return this.class;
  }
};

originalGauntlet.Combatants.Goblin.prototype = new originalGauntlet.Combatants.Monster();

  return originalGauntlet
})(Gauntlet || {})
