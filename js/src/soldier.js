function Soldier(name, health, minAttack, maxAttack) {
  this.name = name 
  this.health = health
  this.minAttack = minAttack
  this.maxAttack = maxAttack
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
