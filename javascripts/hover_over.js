var Gauntlet = (function(originalGauntlet){
 originalGauntlet.hoverOver= function(){

 var showInfo;
/*-----Classes' Hover Over-----*/ 
$("#selectClass").click(function(){
  
  //Hover Over Warrior
  $("#Warrior").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Warrior();
    $(this).append($("<span>HealthBonus+ "+showInfo.healthBonus+"<br> StrengthBonus+ "+showInfo.strengthBonus+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $( "#Warrior.fade" ).hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

  //Hover Over Valkyrie
  $("#Valkyrie").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Valkyrie();
    $(this).append($("<span>HealthBonus+ "+showInfo.healthBonus+"<br> StrengthBonus+ "+showInfo.strengthBonus+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $( "#Valkyrie.fade" ).hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

  //Hover Over Berserker
  $("#Berserker").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Berserker();
    $(this).append($("<span>HealthBonus+ "+showInfo.healthBonus+"<br> StrengthBonus+ "+showInfo.strengthBonus+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $( "#Berserker.fade" ).hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

  //Hover Over Monk
  $("#Monk").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Monk();
    $(this).append($("<span>HealthBonus+ "+showInfo.healthBonus+"<br> StrengthBonus+ "+showInfo.strengthBonus+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $("#Monk.fade").hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

  //Hover Over Shaman
  $("#Shaman").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Shaman();
    $(this).append($("<span>HealthBonus(+) "+showInfo.healthBonus+"<br> StrengthBonus(+) "+showInfo.strengthBonus+"<br>IntelligenceBonus(+)"+showInfo.intelligenceBonus+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $("#Shaman.fade").hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

  //Hover Over Wizard
  $("#Wizard").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Wizard();
    $(this).append($("<span>HealthBonus(+) "+showInfo.healthBonus+"<br> StrengthBonus(+) "+showInfo.strengthBonus+"<br>IntelligenceBonus(+)"+showInfo.intelligenceBonus+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $("#Wizard.fade").hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

  //Hover Over Sorcerer
  $("#Sorcerer").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Sorcerer();
    $(this).append($("<span>HealthBonus(+) "+showInfo.healthBonus+"<br> StrengthBonus(+) "+showInfo.strengthBonus+"<br>IntelligenceBonus(+)"+showInfo.intelligenceBonus+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $("#Sorcerer.fade").hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

  //Hover Over Conjurer
  $("#Conjurer").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Conjurer();
    $(this).append($("<span>HealthBonus(+) "+showInfo.healthBonus+"<br> StrengthBonus(+) "+showInfo.strengthBonus+"<br>IntelligenceBonus(+)"+showInfo.intelligenceBonus+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $("#Conjurer.fade").hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

  //Hover Over Thief
  $("#Thief").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Thief();
    $(this).append($("<span>HealthBonus(+) "+showInfo.healthBonus+"<br> StrengthBonus(+) "+showInfo.strengthBonus+"<br>IntelligenceBonus(+)"+showInfo.intelligenceBonus+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $("#Thief.fade").hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

  //Hover Over Ninja
  $("#Ninja").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Ninja();
    $(this).append($("<span>HealthBonus(+) "+showInfo.healthBonus+"<br> StrengthBonus(+) "+showInfo.strengthBonus+"<br>IntelligenceBonus(+)"+showInfo.intelligenceBonus+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $("#Ninja.fade").hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

  //Hover Over Assassin
  $("#Assassin").hover(
  function() {
    showInfo = new Gauntlet.GuildHall.Assassin();
    $(this).append($("<span>HealthBonus(+) "+showInfo.healthBonus+"<br> StrengthBonus(+) "+showInfo.strengthBonus+"<br>IntelligenceBonus(+)"+showInfo.intelligenceBonus+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $("#Assassin.fade").hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });
});

/*-----Weapon's Hover Over-----*/
$("#selectWeapon").click(function(){
  var showInfo;

  //Hover Over Dagger
  $("#Dagger").hover(
  function() {
    showInfo = new Dagger();
    $(this).append($("<span>Damage: "+showInfo.damage+"<br> Hand(s): "+showInfo.hands+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $( "#Dagger.fade" ).hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

  //Hover Over Broadsword
  $("#BroadSword").hover(
  function() {
    showInfo = new BroadSword();
    $(this).append($("<span>Damage: "+showInfo.damage+"<br> Hand(s): "+showInfo.hands+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $( "#BroadSword.fade" ).hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

  //Hover Over WarAxe
  $("#WarAxe").hover(
  function() {
    showInfo = new WarAxe();
    $(this).append($("<span>Damage: "+showInfo.damage+"<br> Hand(s): "+showInfo.hands+"</span>"));
  }, function() {
    $(this).find("span:last").remove();
    });
 
  $( "#WarAxe.fade" ).hover(function() {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });












});



};
return originalGauntlet;
}(Gauntlet)||{});

Gauntlet.hoverOver();