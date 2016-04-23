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

  BroadSword = function() {
    this.name = "Broad Sword";
    this.damage = 14;
    this.hands = 2;
  };
  BroadSword.prototype = new originalGauntlet.Weapon();

  WarAxe = function() {
    this.name = "War Axe";
    this.damage = 18;
    this.hands = 2;
  };
  WarAxe.prototype = new originalGauntlet.Weapon();

  return originalGauntlet
})(Gauntlet || {})
