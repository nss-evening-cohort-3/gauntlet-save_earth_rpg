var Gauntlet = (function(originalGauntlet){

originalGauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Valkyrie", "Berserker", "Monk"];
};

originalGauntlet.Combatants.Orc.prototype = new originalGauntlet.Combatants.Monster();


originalGauntlet.Combatants.Undead = function() {
  this.health = this.health + 20;
  this.species = "Undead";
  this.allowedClasses = ["Shaman", "Wizard", "Sorcerer", "Conjurer"];
};

originalGauntlet.Combatants.Undead.prototype = new originalGauntlet.Combatants.Monster();


originalGauntlet.Combatants.Goblin = function() {
  this.health = this.health + 20;
  this.species = "Goblin";
  this.allowedClasses = ["Thief", "Ninja", "Assassin"];
};

originalGauntlet.Combatants.Goblin.prototype = new originalGauntlet.Combatants.Monster();

  return originalGauntlet
})(Gauntlet || {})
