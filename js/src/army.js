function Army() {
  this.units = []
  this.count = 0
}

Army.prototype.insertSoldier = function(soldier1,soldier2,soldier3) {
  this.units.push(soldier1,soldier2,soldier3)
}

Army.prototype.turn = function(object) {
  this.count < (this.units.length -1) ? this.count ++ : this.count = 0
  object.canMove(object.posY, object.posX)
  return object
}

Army.prototype.removeChar = function(char, y, x) {
  var index = this.units.indexOf(char)
  if(index > -1) this.units.splice(index, 1)
  game.removeCharCurrentTurn(char)
  game.removeCharMatrix(y,x)
}