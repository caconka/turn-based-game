function Army() {
  this.units = []
  this.count = 0
}

Army.prototype.insertSoldier = function(soldier1,soldier2,soldier3) {
  this.units.push(soldier1,soldier2,soldier3)
}

Army.prototype.removeChar = function(character) {
  $("#" + character).remove()
  game.win()
}

Army.prototype.turn = function() {
  var char = this.units[this.count]
  this.count < 2 ? this.count ++ : this.count = 0
  char.canMove(char.posY, char.posX)
  return char
}