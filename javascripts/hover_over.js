var Gauntlet = (function(originalGauntlet){
 originalGauntlet.hoverOver= function(){

  

/*-----Classes' Hover Over-----*/ 
$("#selectClass").click(function(){
 var showInfo;

  // Initiate jQuery ToolTip 
  $(function() {
  $('[data-toggle="tooltip"]').tooltip()
  });
  
  //Hover Over Warrior
  $("#Warrior").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Warrior();
    $("#Warrior").attr("data-toggle", "tooltip");
    $("#Warrior").attr("data-placement", "top");
    $("#Warrior").attr("title", `HealthBonus of +${showInfo.healthBonus} StrengthBonus of +${showInfo.strengthBonus}`);
    });

  //Hover Over Valkyrie
    $("#Valkyrie").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Valkyrie();
    $("#Valkyrie").attr("data-toggle", "tooltip");
    $("#Valkyrie").attr("data-placement", "top");
    $("#Valkyrie").attr("title", `HealthBonus of +${showInfo.healthBonus} StrengthBonus of +${showInfo.strengthBonus}`);
    });

  //Hover Over Berserker
  $("#Berserker").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Berserker();
    $("#Berserker").attr("data-toggle", "tooltip");
    $("#Berserker").attr("data-placement", "top");
    $("#Berserker").attr("title", `HealthBonus of +${showInfo.healthBonus} StrengthBonus of +${showInfo.strengthBonus}`);
    });

  //Hover Over Monk
  $("#Monk").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Monk();
    $("#Monk").attr("data-toggle", "tooltip");
    $("#Monk").attr("data-placement", "top");
    $("#Monk").attr("title", `HealthBonus of +${showInfo.healthBonus} StrengthBonus of +${showInfo.strengthBonus}`);
    });

  //Hover Over Shaman
  $("#Shaman").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Shaman();
    $("#Shaman").attr("data-toggle", "tooltip");
    $("#Shaman").attr("data-placement", "top");
    $("#Shaman").attr("title", `HealthBonus of +${showInfo.healthBonus} StrengthBonus of +${showInfo.strengthBonus}`);
    });

  //Hover Over Wizard
  $("#Wizard").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Wizard();
    $("#Wizard").attr("data-toggle", "tooltip");
    $("#Wizard").attr("data-placement", "top");
    $("#Wizard").attr("title", `HealthBonus of +${showInfo.healthBonus} StrengthBonus of +${showInfo.strengthBonus}`);
    });

  //Hover Over Sorcerer
  $("#Sorcerer").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Sorcerer();
    $("#Sorcerer").attr("data-toggle", "tooltip");
    $("#Sorcerer").attr("data-placement", "top");
    $("#Sorcerer").attr("title", `HealthBonus of +${showInfo.healthBonus} StrengthBonus of +${showInfo.strengthBonus}`);
    });

  //Hover Over Conjurer
  $("#Conjurer").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Conjurer();
    $("#Conjurer").attr("data-toggle", "tooltip");
    $("#Conjurer").attr("data-placement", "top");
    $("#Conjurer").attr("title", `HealthBonus of +${showInfo.healthBonus} StrengthBonus of +${showInfo.strengthBonus}`);
    });

  //Hover Over Thief
  $("#Thief").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Thief();
    $("#Thief").attr("data-toggle", "tooltip");
    $("#Thief").attr("data-placement", "top");
    $("#Thief").attr("title", `HealthBonus of +${showInfo.healthBonus} StrengthBonus of +${showInfo.strengthBonus}`);
    });

  //Hover Over Ninja
  $("#Ninja").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Ninja();
    $("#Ninja").attr("data-toggle", "tooltip");
    $("#Ninja").attr("data-placement", "top");
    $("#Ninja").attr("title", `HealthBonus of +${showInfo.healthBonus} StrengthBonus of +${showInfo.strengthBonus}`);
    });

  //Hover Over Assassin
  $("#Assassin").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Assassin();
    $("#Assassin").attr("data-toggle", "tooltip");
    $("#Assassin").attr("data-placement", "top");
    $("#Assassin").attr("title", `HealthBonus of +${showInfo.healthBonus} StrengthBonus of +${showInfo.strengthBonus}`);
    });
});

/*-----Weapon's Hover Over-----*/
$("#selectWeapon").click(function(){ 
  var showInfo;

  //Hover Over Dagger
  $("#Dagger").hover(
  function() {
    showInfo = new Dagger();
    $("#Dagger").attr("data-toggle", "tooltip");
    $("#Dagger").attr("data-placement", "top");
    $("#Dagger").attr("title", `Damage bonus of +${showInfo.damage} Number of hands ${showInfo.hands}`);
    });

  //Hover Over Broadsword
  $("#Broadsword").hover(
  function() {
    showInfo = new BroadSword();
    $("#Broadsword").attr("data-toggle", "tooltip");
    $("#Broadsword").attr("data-placement", "top");
    $("#Broadsword").attr("title", `Damage bonus of +${showInfo.damage} Number of hands ${showInfo.hands}`);
    });

  //Hover Over WarAxe
  $("#WarAxe").hover(
  function() {
    showInfo = new WarAxe();
    $("#WarAxe").attr("data-toggle", "tooltip");
    $("#WarAxe").attr("data-placement", "top");
    $("#WarAxe").attr("title", `Damage bonus of +${showInfo.damage} Number of hands ${showInfo.hands}`);
    });
});
};
return originalGauntlet;
}(Gauntlet)||{});
Gauntlet.hoverOver();