describe("Soldier", function() {
  var soldier

  beforeEach(function() {
   soldier = new Soldier()
  })

  describe("Constructor function", function() {
    it("Debe recibir tres argumentos", function() {
      expect(Soldier.length).toEqual(3)
    })
  })
}) 
