var game = new Board()
var warrior1 = new Soldier("Rg", 100, 6, 8, 1, 0)

$(document).ready(function() {
  game.startGame()
 // $("#start").on("click", function() {
 //   $(this).css("display", "none")
 //   update()
 //   $("#restart").css("display", "block")
 // })

  $(".character").on("click", function() {
    // var select = this
    var id = $(this).attr("id")
    var index = $("#board div").index($(this))
    var y = parseInt(index.toString().split("")[0])
    var x = parseInt(index.toString().split("")[1])
    console.log("hola")

    $(".box-position").on("click", function() {
      var moveTo = $("#board div").index($(this))
     // $(select).prop("id", "").attr("class", "box-position")
     // $(this).attr("class", "character").attr("id", id)
      var y2 = parseInt(moveTo.toString().split("")[0])
      var x2 = parseInt(moveTo.toString().split("")[1])
      if(id == "warrior1")
        id = warrior1
      id.move(y,x,y2,x2)

    })
  })

 // $(".box-position").on("click", function() {
 //   $("#hola").remove()
 //   console.log("hola")
 //   $(this).append($("<div>").attr("id", "hola"))
 // })
})

function update() {
  game.renderGame()

}