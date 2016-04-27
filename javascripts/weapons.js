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
    this.hands = 1;
  };
  Dagger.prototype = new originalGauntlet.Weapon();

  Flail = function() {
    this.name = "Flail";
    this.damage = 6;
    this.hands = 1;
  };
  Flail.prototype = new originalGauntlet.Weapon();

  Hatchet = function() {
    this.name = "Hatchet";
    this.damage = 7;
    this.hands = 1;
  };
  Hatchet.prototype = new originalGauntlet.Weapon();

  WarSword = function() {
    this.name = "War Sword";
    this.damage = 8;
    this.hands = 1;
  };
  WarSword.prototype = new originalGauntlet.Weapon();

  BroadSword = function() {
    this.name = "Broad Sword";
    this.damage = 14;
    this.hands = 2;
  };
  BroadSword.prototype = new originalGauntlet.Weapon();

  BattleAxe = function() {
    this.name = "Battle Axe";
    this.damage = 15;
    this.hands = 2;
  };
  BattleAxe.prototype = new originalGauntlet.Weapon();

  Spear = function() {
    this.name = "Spear";
    this.damage = 17;
    this.hands = 2;
  };
  Spear.prototype = new originalGauntlet.Weapon();

  BattleHammer = function() {
    this.name = "Battle Hammer";
    this.damage = 18;
    this.hands = 2;
  };
  BattleHammer.prototype = new originalGauntlet.Weapon();


  return originalGauntlet
})(Gauntlet || {})
