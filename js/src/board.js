function Board() {
  this.board = [
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,4],
    [0,0,0,0,0,0,0,0,0,0],
    [2,0,0,0,0,0,0,0,0,5],
    [3,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0]
  ]
  this.player1 = ["warrior1", "archer1", "healer1"]
  this.player2 = ["warrior2", "archer2", "healer2"]
}

Board.prototype.startGame = function() {
  this.renderBoard()
  //$("#char").css("display", "block")
}

Board.prototype.renderBoard = function() {
  var that = this
  this.board.forEach(function(row, indY) {
    that.board[indY].forEach(function(col, indX) {
      var char = $("<div>").attr("class", "character")
      switch (col) {
        case 1:
          $("#board").append($($(char)[0]).attr("id", "warrior1"))
          break
        case 2:
          $("#board").append($($(char)[0]).attr("id", "archer1"))
          break
        case 3:
          $("#board").append($($(char)[0]).attr("id", "healer1"))
          break
        case 4:
          $("#board").append($($(char)[0]).attr("id", "warrior2"))
          break
        case 5:
          $("#board").append($($(char)[0]).attr("id", "archer2"))
          break
        case 6:
          $("#board").append($($(char)[0]).attr("id", "healer2"))
          break
        default:
          var box = $("<div>").attr("class", "box-position")
          $("#board").append($(box)[0])
          break
      }
    })
  })
}

Board.prototype.renderCharacters = function() {

}

//Board.prototype.selectCharacters = function(id) {
//  if(this.player1.length !== 3 || this.player2 !== 3) {
//    this.player1.length < 3 ? this.player1.push(id) : this.player2.push(id)
//    this.renderCharacters(id)
//    if(this.player2.length == 3) {
//      $("#char").css("display", "none")
//    }
//  } 
//}

Board.prototype.positionChar = function(id) {
  
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