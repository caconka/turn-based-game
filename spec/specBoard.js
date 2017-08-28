describe("Board", function() {
  var game

  beforeEach(function() {
    game = new Board()
  })

  describe("Board properties", function() {
    it("Debe tener un array en el que introducir el mapa", function() {
      expect(Array.isArray(game.board)).toBe(true)
    })
  })

  describe("Board methods", function() {
    it("Debe tener un método para renderizar el tablero", function() {
      expect(game.renderGame)
    })

    it("Debe tener un método para comprobar posiciones vacías", function() {
      expect(typeof(game.isEmpty)).toBe("function")
    })

    it("Debe recibir un parámetro", function() {
      expect(game.isEmpty.length).toEqual(1)
    })
  })
})
