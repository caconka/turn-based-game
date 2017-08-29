function Soldier(name, health, minAttack, maxAttack, x, y, area) {
  this.name = name 
  this.health = health
  this.minAttack = minAttack
  this.maxAttack = maxAttack
  this.posX = x
  this.posY = y
  this.area = area
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
  var position = y1 * 10 + x1
  switch (this.area) {
    case 1:
      
      break;
    case 2:
      
      break;
    case 3:
      
      break;
  }
}

Soldier.prototype.move = function(y1, x1, y2, x2) {
  game.board[y2][x2] = game.board[y1][x1]
  game.board[y1][x1] = 0
  game.update()
}