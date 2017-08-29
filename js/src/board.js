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
      switch (col) {
        case 1: game.createDivCharacters(0,1); break;
        case 2: game.createDivCharacters(1,1); break;
        case 3: game.createDivCharacters(2,1); break;
        case 4: game.createDivCharacters(0,2); break;
        case 5: game.createDivCharacters(1,2); break;
        case 6: game.createDivCharacters(2,2); break;
        case 8: 
          var area = $("<div>").attr("class", "box-position area")
          $("#board").append($(area)[0])
          break
        default:
          var box = $("<div>").attr("class", "box-position")
          $("#board").append($(box)[0])
          break
      }
    })
  })
}

Board.prototype.createDivCharacters = function(indexCharacter, player) {
  var char = $("<div>").attr("class", "character")
  if(player == 1) 
    $("#board").append($($(char)[0]).attr("id", game.player1[indexCharacter]))
  else if(player == 2) 
    $("#board").append($($(char)[0]).attr("id", game.player2[indexCharacter]))
}

Board.prototype.events = function() {
  $(".character").on("click", function() {
    game.selectedChar = this
    var id = $(this).attr("id")
    var index = $("#board div").index($(this))
    var y1 = parseInt(index.toString().split("")[0])
    var x1 = parseInt(index.toString().split("")[1])
    if(index.toString().length == 1) {
      x1 = y1; y1 = 0
    }
    game.renderArea(game.getIdChar(id), y1,x1)
    
    $(".box-position").on("click", function() {
      var moveTo = $("#board div").index($(this))
      var y2 = parseInt(moveTo.toString().split("")[0])
      var x2 = parseInt(moveTo.toString().split("")[1])
      if(moveTo.toString().length == 1) {
        x2 = y2
        y2 = 0
      }
      if(game.getIdChar(id).canMove(y1,x1,moveTo)) 
        game.getIdChar(id).move(y1,x1,y2,x2)
    })

    $(".character").on("click", function() {

    })
  })
}

Board.prototype.renderArea = function(idChar, y1, x1) {
  idChar.canMove(y1,x1)
}

Board.prototype.getIdChar = function(id) {
  switch (id) {
    case "warrior1": return warrior1; break;
    case "archer1": return archer1; break;
    case "healer1": return healer1; break;
    case "warrior2": return warrior2; break;
    case "archer2": return archer2; break;
    case "healer2": return healer2; break;
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