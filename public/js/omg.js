var OMG = {
  shout: function() {
    var string = "OMG! Same code!"
    string += "<br>" + (Math.random() + 1)
    string += "<br>" + new Date()
    return string
  }
}

exports.shout = OMG.shout
