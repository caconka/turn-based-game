function Soldier(name, health, minAttack, maxAttack, x, y, area, team) {
  this.name = name 
  this.health = health
  this.minAttack = minAttack
  this.maxAttack = maxAttack
  this.posX = x
  this.posY = y
  this.area = area
  this.team = team
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

//Soldier.prototype.canMove = function(y1,x1,moveTo) {
//  var n = parseInt(y1.toString() + x1.toString())
//  var move = parseInt(moveTo)
//  if(   (moveTo >= n-11 && moveTo <= n-9)
//     || (moveTo >= n-2  && moveTo <= n+2)
//     || (moveTo >= n+9  && moveTo <= n+11)) {
//    return true
//  }
//}
Soldier.prototype.canMove = function(y1,x1) {
  for(var i=0; i<=this.area; i++) {
    if(y1>=i) if(game.board[y1-i][x1] == 0) game.board[y1-i][x1] = 8
    if(y1+i<6) if(game.board[y1+i][x1] == 0) game.board[y1+i][x1] = 8
    if(x1>=i) if(game.board[y1][x1-i] == 0) game.board[y1][x1-i] = 8
    if(x1+i<10) if(game.board[y1][x1+i] == 0) game.board[y1][x1+i] = 8
    if(y1>=i && x1>=i) if(game.board[y1-i][x1-i] == 0) game.board[y1-i][x1-i] = 8
    if(y1+i<6 && x1+i<10) if(game.board[y1+i][x1+i] == 0) game.board[y1+i][x1+i] = 8
    if(y1>=i && x1+i<10) if(game.board[y1-i][x1+i] == 0) game.board[y1-i][x1+i] = 8
    if(x1>=i && y1+i<6) if(game.board[y1+i][x1-i] == 0) game.board[y1+i][x1-i] = 8
  }
  return game.update()
}

Soldier.prototype.move = function(y1, x1, y2, x2) {
  game.board[y2][x2] = game.board[y1][x1]
  game.board[y1][x1] = 0
  this.updatePosition(y2,x2)
  game.removePosibilityPositions()
}

Soldier.prototype.updatePosition = function(y2,x2) {
  this.posX = x2; this.posY = y2
} 