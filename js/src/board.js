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
  this.selectedChar = false
}

Board.prototype.startGame = function() {
  this.renderBoard()
  this.events()
}

Board.prototype.update = function() {
  $("#board").children().remove()
  game.renderBoard()
  game.events()
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

Board.prototype.events = function() {
  $(".character").on("click", function() {
    game.selectedChar = this
    var id = $(this).attr("id")
    var index = $("#board div").index($(this))
    var y1 = parseInt(index.toString().split("")[0])
    var x1 = parseInt(index.toString().split("")[1])
    if(index.toString().length == 1) {
      x1 = y1
      y1 = 0
    }

    $(".box-position").on("click", function() {
      var moveTo = $("#board div").index($(this))
      var y2 = parseInt(moveTo.toString().split("")[0])
      var x2 = parseInt(moveTo.toString().split("")[1])
      if(moveTo.toString().length == 1) {
        x2 = y2
        y2 = 0
      }
      if(game.getIdChar(id).canMove(y2,x2)) game.getIdChar(id).move(y1,x1,y2,x2)
    })
  })
}

Board.prototype.getIdChar = function(id) {
  switch (id) {
    case "warrior1":
      return warrior1
      break;
    case "archer1":
      return archer1
      break;
    case "healer1":
      return healer1
      break;
    case "warrior2":
      return warrior2
      break;
    case "archer2":
      return archer2
      break;
    case "healer2":
      return healer2
      break;
  }
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