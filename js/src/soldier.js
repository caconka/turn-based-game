function Soldier(name, health, minAttack, maxAttack, x, y) {
  this.name = name 
  this.health = health
  this.minAttack = minAttack
  this.maxAttack = maxAttack
  this.posX = x
  this.posY = y
}

Soldier.prototype.attack = function() {
  return parseInt(Math.random() * (this.maxAttack - this.minAttack + 1) + this.minAttack)
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage
  return this.isDead(this.health) ? game.removeChar(this.name) : this.health

}

Soldier.prototype.isDead = function(health) {
  return health <= 0 ? true : false
}

Soldier.prototype.canMove = function(y, x) {

  if (game.board[y][x] == 0) {
    return true
  } else {
    false
  }
}

Soldier.prototype.move = function(y, x, y1, x1) {
  game.board[y1][x1] = game.board[y][x]
  game.board[y][x] = 0
  $("#board").children().remove()
  game.renderBoard()
}