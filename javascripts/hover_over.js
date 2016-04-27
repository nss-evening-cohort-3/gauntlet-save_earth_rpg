var Gauntlet = (function(originalGauntlet){
 originalGauntlet.hoverOver= function(){

  

/*-----Classes' Hover Over-----*/ 
$("#selectClass").click(function(){
 var showInfo;

  //Hover over warrior
  $("#Warrior").hover(function(){
    showInfo = new Gauntlet.GuildHall.Warrior();
    $("#Warrior").append(`<span class="badge">HealthBonus +${showInfo.healthBonus}</span>`)
    .append(`<span class="badge">StrengthBonus +${showInfo.strengthBonus}</span>`);
  });
  $("#Warrior").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Valkyrie
  $("#Valkyrie").hover(function(){
    showInfo = new Gauntlet.GuildHall.Valkyrie();
    $("#Valkyrie").append(`<span class="badge">HealthBonus +${showInfo.healthBonus}</span>`)
    .append(`<span class="badge">StrengthBonus +${showInfo.strengthBonus}</span>`);
  });
  $("#Valkyrie").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Berserker
  $("#Berserker").hover(function(){
    showInfo = new Gauntlet.GuildHall.Berserker();
    $("#Berserker").append(`<span class="badge">HealthBonus +${showInfo.healthBonus}</span>`)
    .append(`<span class="badge">StrengthBonus +${showInfo.strengthBonus}</span>`);
  });
  $("#Berserker").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Monk
  $("#Monk").hover(function(){
    showInfo = new Gauntlet.GuildHall.Monk();
    $("#Monk").append(`<span class="badge">HealthBonus +${showInfo.healthBonus}</span>`)
    .append(`<span class="badge">StrengthBonus +${showInfo.strengthBonus}</span>`);
  });
  $("#Monk").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Shaman
  $("#Shaman").hover(function(){
    showInfo = new Gauntlet.GuildHall.Shaman();
    $("#Shaman").append(`<span class="badge">HealthBonus +${showInfo.healthBonus}</span>`)
    .append(`<span class="badge">StrengthBonus +${showInfo.strengthBonus}</span>`);
  });
  $("#Shaman").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Wizard
  $("#Wizard").hover(function(){
    showInfo = new Gauntlet.GuildHall.Wizard();
    $("#Wizard").append(`<span class="badge">HealthBonus +${showInfo.healthBonus}</span>`)
    .append(`<span class="badge">StrengthBonus +${showInfo.strengthBonus}</span>`);
  });
  $("#Wizard").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Sorcerer
  $("#Sorcerer").hover(function(){
    showInfo = new Gauntlet.GuildHall.Sorcerer();
    $("#Sorcerer").append(`<span class="badge">HealthBonus +${showInfo.healthBonus}</span>`)
    .append(`<span class="badge">StrengthBonus +${showInfo.strengthBonus}</span>`);
  });
  $("#Sorcerer").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Conjurer
  $("#Conjurer").hover(function(){
    showInfo = new Gauntlet.GuildHall.Conjurer();
    $("#Conjurer").append(`<span class="badge">HealthBonus +${showInfo.healthBonus}</span>`)
    .append(`<span class="badge">StrengthBonus +${showInfo.strengthBonus}</span>`);
  });
  $("#Conjurer").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Thief
  $("#Thief").hover(function(){
    showInfo = new Gauntlet.GuildHall.Thief();
    $("#Thief").append(`<span class="badge">HealthBonus +${showInfo.healthBonus}</span>`)
    .append(`<span class="badge">StrengthBonus +${showInfo.strengthBonus}</span>`);
  });
  $("#Thief").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Ninja
  $("#Ninja").hover(function(){
    showInfo = new Gauntlet.GuildHall.Ninja();
    $("#Ninja").append(`<span class="badge">HealthBonus +${showInfo.healthBonus}</span>`)
    .append(`<span class="badge">StrengthBonus +${showInfo.strengthBonus}</span>`);
  });
  $("#Ninja").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Assassin
  $("#Assassin").hover(function(){
    showInfo = new Gauntlet.GuildHall.Assassin();
    $("#Assassin").append(`<span class="badge">HealthBonus +${showInfo.healthBonus}</span>`)
    .append(`<span class="badge">StrengthBonus +${showInfo.strengthBonus}</span>`);
  });
  $("#Assassin").mouseleave(function(){
    $(".badge").remove();
  });

});

/*-----Weapon's Hover Over-----*/
$("#selectWeapon").click(function(){ 
  var showInfo;

  //Hover over Dagger
  $("#Dagger").hover(function(){
    showInfo = new Dagger();
    $("#Dagger").append(`<span class="badge">Damage +${showInfo.damage}</span>`)
    .append(`<span class="badge">Number of Hands Required =${showInfo.hands}</span>`);
  });
  $("#Dagger").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Broadsword
  $("#BroadSword").hover(function(){
    showInfo = new BroadSword();
    $("#BroadSword").append(`<span class="badge">Damage +${showInfo.damage}</span>`)
    .append(`<span class="badge">Number of Hands Required =${showInfo.hands}</span>`);
  });
  $("#BroadSword").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Battle Axe
  $("#BattleAxe").hover(function(){
    showInfo = new BattleAxe();
    $("#BattleAxe").append(`<span class="badge">Damage +${showInfo.damage}</span>`)
    .append(`<span class="badge">Number of Hands Required =${showInfo.hands}</span>`);
  });
  $("#BattleAxe").mouseleave(function(){
    $(".badge").remove();
  });

  //Hover Over WarSword
  $("#WarSword").hover(function(){
    showInfo = new WarSword();
    $("#WarSword").append(`<span class="badge">Damage +${showInfo.damage}</span>`)
    .append(`<span class="badge">Number of Hands Required =${showInfo.hands}</span>`);
  });
  $("#WarSword").mouseleave(function(){
    $(".badge").remove();
  });

  //Hover Over Spear
  $("#Spear").hover(function(){
    showInfo = new Spear();
    $("#Spear").append(`<span class="badge">Damage +${showInfo.damage}</span>`)
    .append(`<span class="badge">Number of Hands Required =${showInfo.hands}</span>`);
  });
  $("#Spear").mouseleave(function(){
    $(".badge").remove();
  });

  //Hover Over Flail
  $("#Flail").hover(function(){
    showInfo = new Flail();
    $("#Flail").append(`<span class="badge">Damage +${showInfo.damage}</span>`)
    .append(`<span class="badge">Number of Hands Required =${showInfo.hands}</span>`);
  });
  $("#Flail").mouseleave(function(){
    $(".badge").remove();
  });

  //Hover Over Hatchet
  $("#Hatchet").hover(function(){
    showInfo = new Hatchet();
    $("#Hatchet").append(`<span class="badge">Damage +${showInfo.damage}</span>`)
    .append(`<span class="badge">Number of Hands Required =${showInfo.hands}</span>`);
  });
  $("#Hatchet").mouseleave(function(){
    $(".badge").remove();
  });

  //Hover Over BattleHammer
  $("#BattleHammer").hover(function(){
    showInfo = new BattleHammer();
    $("#BattleHammer").append(`<span class="badge">Damage +${showInfo.damage}</span>`)
    .append(`<span class="badge">Number of Hands Required =${showInfo.hands}</span>`);
  });
  $("#BattleHammer").mouseleave(function(){
    $(".badge").remove();
  });

    //Hover Over Sphere Spell
  $("#sphere").hover(function(){
    showInfo = new Gauntlet.SpellBook.Sphere();
    $("#sphere").append(`<span class="badge">Damage +${showInfo.damage}</span>`)
    .append(`<span class="badge">Number of Hands Required =${showInfo.hands}</span>`);
  });
  $("#sphere").mouseleave(function(){
    $(".badge").remove();
  });  

});
};
return originalGauntlet;
}(Gauntlet)||{});
Gauntlet.hoverOver();