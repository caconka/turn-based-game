function Board() {
  this.board = [
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,4],
    [0,0,0,0,0,0,0,0,0,0],
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
  this.renderArea(); this.renderBoard(); this.events()
}

Board.prototype.update = function() {
  $("#board").children().remove()
  this.renderBoard(); this.events()
}

Board.prototype.renderArea = function() {
  var char = game.currentTurn[game.count]
  char==warrior1 || char==archer1 || char==healer1 ? team1.turn() : team2.turn()
}

Board.prototype.renderBoard = function() {
  var that = this
  this.board.forEach(function(row, indY) {
    that.board[indY].forEach(function(col, indX) {
      switch (col) {
        case 1: game.createDivCharacters(0,1,"W1"); break;
        case 2: game.createDivCharacters(1,1,"Ar1"); break;
        case 3: game.createDivCharacters(2,1,"H1"); break;
        case 4: game.createDivCharacters(0,2,"W2"); break;
        case 5: game.createDivCharacters(1,2,"Ar2"); break;
        case 6: game.createDivCharacters(2,2,"H2"); break;
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

Board.prototype.createDivCharacters = function(indexCharacter, player, name) {
  var char = $("<div>").attr("class", "character " + name)
  if(player == 1) 
    $("#board").append($($(char)[0]).attr("id", name))
  else if(player == 2) 
    $("#board").append($($(char)[0]).attr("id", name))
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
    return game.update()
  })

  $(".character").on("click", function() {
    var position = $("#board div").index($(this))
    var y = parseInt(position.toString().split("")[0])
    var x = parseInt(position.toString().split("")[1])
    if(moveTo.toString().length == 1) {
      x = y
      y = 0
    }  
    var idSelector = $(this).attr("id")
    var char = game.getCharObject(idSelector)
    char.receiveDamage(game.currentTurn[game.count].attack(), y, x)
    console.log(char.health)
    return game.update()
  })
}

Board.prototype.renderCurrentTurn = function() {
  $("#turn").children().remove()
  this.count < 5 ? this.count ++ : this.count = 0
  var char = this.currentTurn[this.count]
  var turn = $("<div>").attr("class", "character " + char.name)
  $("#turn").append($(turn)[0])
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

Board.prototype.getCharObject = function(idSelector) {
  var char
  switch (idSelector) {
    case "W1": char = warrior1; break;
    case "Ar1": char = archer1; break;
    case "H1": char = healer1; break;
    case "W2": char = warrior2; break;
    case "Ar2": char = archer2; break;
    case "H2": char = healer2; break;
  }
  return char
}

Board.prototype.getAttackPosition = function(y,x) {
  var index = y.toString() + x.toString()

  console.log(index)
}

Board.prototype.removeCharCurrentTurn = function(char) {
  var index = this.currentTurn.indexOf(char)
  if(index > -1) this.currentTurn.splice(index, 1)
}

Board.prototype.removeCharMatrix = function(y,x) {
  this.board[y][x] = 0
}

Board.prototype.win = function() {
  if(team1.units.length <= 0) console.log("player 2 wins")
  else if(team2.units.length <= 0) console.log("player 1 wins")
}