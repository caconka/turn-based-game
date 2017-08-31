function Soldier(name, health, minAttack, maxAttack, y, x, area, team) {
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

Soldier.prototype.receiveDamage = function(damage,y,x) {
  this.health -= damage
  console.log(this.health)
  return this.isDead(this.health) ? this.team.removeChar(this,y,x) : this.health
}

Soldier.prototype.isDead = function(health) {
  return health <= 0 ? true : false
}

Soldier.prototype.canMove = function(y1,x1) {
  for(var i=1; i<=this.area; i++) {
    if(y1>=i) game.board[y1-i][x1] == 0 ? game.board[y1-i][x1] = 8 : game.getAttackPosition(y1-i,x1)
    if(y1+i<6) game.board[y1+i][x1] == 0 ? game.board[y1+i][x1] = 8 : game.getAttackPosition(y1+i,x1)
    if(x1>=i) game.board[y1][x1-i] == 0 ? game.board[y1][x1-i] = 8 : game.getAttackPosition(y1,x1-i)
    if(x1+i<10) game.board[y1][x1+i] == 0 ? game.board[y1][x1+i] = 8 : game.getAttackPosition(y1,x1+i)
    if(y1>=i && x1>=i) game.board[y1-i][x1-i] == 0 ? game.board[y1-i][x1-i] = 8 : game.getAttackPosition(y1-i,x1-i)
    if(y1+i<6 && x1+i<10) game.board[y1+i][x1+i] == 0 ? game.board[y1+i][x1+i] = 8 : game.getAttackPosition(y1+i,x1+i)
    if(y1>=i && x1+i<10) game.board[y1-i][x1+i] == 0 ? game.board[y1-i][x1+i] = 8 : game.getAttackPosition(y1-i,x1+i)
    if(x1>=i && y1+i<6) game.board[y1+i][x1-i] == 0 ? game.board[y1+i][x1-i] = 8 : game.getAttackPosition(y1+i,x1-i)
  }
}

Soldier.prototype.move = function(y1, x1, y2, x2) {
  game.board[y2][x2] = game.board[y1][x1]
  game.board[y1][x1] = 0
  this.updatePosition(y2,x2)
}

Soldier.prototype.updatePosition = function(y2,x2) {
  this.posX = x2; this.posY = y2
} 