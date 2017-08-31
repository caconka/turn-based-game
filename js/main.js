var game = new Board()
var team1 = new Army()
var team2 = new Army()
var warrior1 = new Soldier("W1", 100, 7, 10, 1, 0, 1, team1)
var archer1 = new Soldier("Ar1", 70, 2, 9, 3, 0, 2, team1)
var healer1 = new Soldier("H1", 40, 9, 12, 4, 0, 1, team1)
var warrior2 = new Soldier("W2", 100, 7, 10, 1, 9, 1, team2)
var archer2 = new Soldier("Ar2", 70, 2, 9, 3, 9, 2, team2)
var healer2 = new Soldier("H2", 40, 9, 12, 4, 9, 1, team2)

$(document).ready(function() {
  $("#start").on("click", function() {
    $("#start").hide()
    $("#restart").show()
    $("#turn").show()
    game.start()
  })
})
