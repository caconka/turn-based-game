var game = new Board()
var warrior1 = new Soldier("W1", 100, 7, 10, 1, 0, 1, 1)
var archer1 = new Soldier("Ar1", 100, 2, 9, 3, 0, 2, 1)
var healer1 = new Soldier("H1", 100, 9, 12, 4, 0, 1, 1)
var warrior2 = new Soldier("W2", 100, 7, 10, 1, 0, 1, 2)
var archer2 = new Soldier("Ar2", 100, 2, 9, 3, 0, 2, 2)
var healer2 = new Soldier("H2", 100, 9, 12, 4, 0, 1, 2)

$(document).ready(function() {
  $("#start").on("click", function() {
    $("#start").css({display: "none"})
    $("#restart").css({display: "block"})
    $("#turn").css({display: "block"})
    game.update()
  })
})
