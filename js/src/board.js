function Board() {
  this.board = [
    [8,8,0,0,0,0,0,0,0,0],
    [1,8,0,0,0,0,0,0,0,4],
    [8,8,0,0,0,0,0,0,0,0],
    [2,0,0,0,0,0,0,0,0,5],
    [3,0,0,0,0,0,0,0,0,6],
    [0,0,0,0,0,0,0,0,0,0]
  ]
  this.currentTurn = []
  this.count = 0
}

Board.prototype.start = function() {
  team1.insertSoldier(warrior1,archer1,healer1)
  team2.insertSoldier(warrior2,archer2,healer2)  
  this.currentTurn.push(warrior1,archer1,healer1,warrior2,archer2,healer2)
  this.update(); this.renderArea()
}

Board.prototype.update = function() {
  $("#board").children().remove()
  this.renderBoard(); this.events();
}

Board.prototype.renderCurrentTurn = function() {
  $("#turn").children().remove()
  this.count < 5 ? this.count ++ : this.count = 0
  var char = this.currentTurn[this.count]
  var turn = $("<div>").attr("class", "character " + char.name)
  $("#turn").append($(turn)[0])
}

Board.prototype.renderBoard = function() {
  var that = this
  this.board.forEach(function(row, indY) {
    that.board[indY].forEach(function(col, indX) {
      switch (col) {
        case 1: game.createDivCharacters(0,1,0); break;
        case 2: game.createDivCharacters(1,1,1); break;
        case 3: game.createDivCharacters(2,1,2); break;
        case 4: game.createDivCharacters(0,2,3); break;
        case 5: game.createDivCharacters(1,2,4); break;
        case 6: game.createDivCharacters(2,2,5); break;
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

Board.prototype.removePosibilityPositions = function() {
  var that = this
  this.board.forEach(function(row, indY) {
    that.board[indY].forEach(function(col, indX) {
      if(col == 8) {
        that.board[indY][indX] = 0
      }
    })
  })
}

Board.prototype.createDivCharacters = function(indexCharacter, player, index) {
  var char = $("<div>").attr("class", "character " + this.currentTurn[index].name)
  if(player == 1) 
    $("#board").append($($(char)[0]).attr("id", team1.units[indexCharacter].name))
  else if(player == 2) 
    $("#board").append($($(char)[0]).attr("id", team1.units[indexCharacter].name))
}

Board.prototype.events = function() {
  $(".area").on("click", function() {
    var moveTo = $("#board div").index($(this))
    var y2 = parseInt(moveTo.toString().split("")[0])
    var x2 = parseInt(moveTo.toString().split("")[1])
    if(moveTo.toString().length == 1) {
      x2 = y2
      y2 = 0
    }
    var char = game.currentTurn[game.count]
    char.move(char.posY,char.posX,y2,x2)
    game.removePosibilityPositions()
    game.renderCurrentTurn()
    game.renderArea()
    game.update()
  })

  $(".attack-possible").on("click", function() {

  })
}

Board.prototype.renderArea = function() {
  var char = game.currentTurn[game.count]
  char==warrior1 || char==archer1 || char==healer1 ? team1.turn() : team2.turn()
}

Board.prototype.win = function() {
  if(team1.units.length <= 0) console.log("player 2 wins")
  else if(team2.units.length <= 0) console.log("player 1 wins")
}