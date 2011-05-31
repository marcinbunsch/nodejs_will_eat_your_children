var OMG = require('./../../public/js/omg')

describe('OMG', function() {

  it("should return a helpful message", function() {
    OMG.shout().should_match("OMG! Same code!")
  })

  it("should not return a stupid message", function() {
    OMG.shout().should_not_be("LOLWUT")
  })

})
