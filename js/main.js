var game = new Board()
var soldier = new Soldier("Rg", 100, 6, 8)

$(document).ready(function() {

  $(".div2").on("click", function() {
    $("#hola").remove()
    $(this).append($("<div>").attr("id", "hola"))
  })

  $("#start").on("click", function() {
    game.startGame()
    $(this).css("display", "none")
    $("#restart").css("display", "block")
  })

  $(".characters").on("click", function() {
    game.selectCharacters($(this).attr("id"))
  })
})