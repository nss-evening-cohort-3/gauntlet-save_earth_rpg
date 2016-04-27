var Gauntlet = (function(originalGauntlet){

var spell = new originalGauntlet.SpellBook.Sphere();



$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;
    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = (globalSpecies !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      if ((nextCard === "card--weapon") && (globalSpecies === "Elf")) {
        nextCard = "card--spell";
      }
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    if ((previousCard === "card--weapon") && (globalSpecies === "Elf")) {
        previousCard = "card--spell";
      }
    $("." + previousCard).show();
  });


});
  return originalGauntlet
})(Gauntlet || {})