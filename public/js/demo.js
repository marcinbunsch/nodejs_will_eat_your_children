$.domReady(function () {
  $('.demo a').bind('click', function(e) {
    $('.demo .browser p').html(OMG.shout())
    e.preventDefault();
  })

  $('.demo .browser p').html(OMG.shout())
})
