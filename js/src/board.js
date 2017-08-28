function Board() {
  this.board = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ]
  this.player1 = []
  this.player2 = []
}

Board.prototype.startGame = function() {
  this.renderGame()
}

Board.prototype.renderGame = function() {
  this.renderBoard()
  this.renderCharacters()
  this.selectCharacters()
}

Board.prototype.renderBoard = function() {
  var that = this
  this.board.forEach(function(row, indY) {
    that.board[indY].forEach(function(col, indX) {
      var box = $("<div>").attr("class", "box-position").attr("id", (indY + "." + indX))
      $("#board").append($(box)[0])
    })
  })
}

Board.prototype.renderCharacters = function() {

}

Board.prototype.selectCharacters = function(id) {
  if(this.player1.length !== 3 && this.player2 !== 3) {
    this.player1.length < 3 ? this.player1.push(id) : this.player2.push(id)
  }
}

Board.prototype.isEmpty = function(position) {

}

Board.prototype.removeChar = function(character) {
  $("#" + character).remove()
  this.win()
}

Board.prototype.win = function() {
  if(this.player1.length <= 0) 
    console.log("player 2 wins")
  else if(this.player2.length <= 0)
    console.log("player 1 wins")
}