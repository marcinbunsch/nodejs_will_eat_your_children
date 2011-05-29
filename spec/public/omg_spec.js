describe('OMG', function() {
  var OMG = require('./../../public/omg').OMG

  it("should return a helpful message", function() {
    OMG.shout().should_be("OMG! Same code!")
  })

  it("should not return a stupid message", function() {
    OMG.shout().should_not_be("LOLWUT")
  })

})
