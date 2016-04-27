var Gauntlet = (function(originalGauntlet){

  originalGauntlet.Weapon = function() {
    this.name = "bare hands";
    this.damage = 1;
    this.hands = 2;

    this.toString = function() {
      return this.name;
    }
  };

  Dagger = function() {
    this.name = "Dagger";
    this.damage = 4;
    this.damageRange = "4-10 per hand";
    this.hands = 1;
  };
  Dagger.prototype = new originalGauntlet.Weapon();

  Flail = function() {
    this.name = "Flail";
    this.damage = 5;
    this.damageRange = "5-11 per hand";
    this.hands = 1;
  };
  Flail.prototype = new originalGauntlet.Weapon();

  Hatchet = function() {
    this.name = "Hatchet";
    this.damage = 6;
    this.damageRange = "6-12 per hand"
    this.hands = 1;
  };
  Hatchet.prototype = new originalGauntlet.Weapon();

  WarSword = function() {
    this.name = "War Sword";
    this.damage = 7;
    this.damageRange = "7-13 per hand"
    this.hands = 1;
  };
  WarSword.prototype = new originalGauntlet.Weapon();

  BroadSword = function() {
    this.name = "Broad Sword";
    this.damage = 12;
    this.damageRange = "12-16 total"
    this.hands = 2;
  };
  BroadSword.prototype = new originalGauntlet.Weapon();

  BattleAxe = function() {
    this.name = "Battle Axe";
    this.damage = 13;
    this.damageRange = "13-17 total"
    this.hands = 2;
  };
  BattleAxe.prototype = new originalGauntlet.Weapon();

  Spear = function() {
    this.name = "Spear";
    this.damage = 14;
    this.damageRange = "14-18 total"
    this.hands = 2;
  };
  Spear.prototype = new originalGauntlet.Weapon();

  BattleHammer = function() {
    this.name = "Battle Hammer";
    this.damage = 15;
    this.damageRange = "15-19 total"
    this.hands = 2;
  };
  BattleHammer.prototype = new originalGauntlet.Weapon();


  return originalGauntlet
})(Gauntlet || {})
