requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app'
  },
  map: {
    // this maps jQuery in noconflict mode.
    // http://requirejs.org/docs/jquery.html#cdnconfig
    '*': { 'jquery': 'jquery-private' }
  , 'jquery-private': { 'jquery': 'jquery' }
  }

});

// Start the main app logic.
requirejs([ 'domReady', 'jquery' ],
function (   ready,      $       ) {
  ready( function () {

    var $window = $(window)
      , $header = $('#header')
    ;

    $window.on('scroll', function () {
      if ( $window.scrollTop() > 50)
        $header.addClass('collapse');
      else
        $header.removeClass('collapse');

    })
    $window.trigger('scroll');
  })
});
