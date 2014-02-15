
/*
 * GET home page.
 */

var path = require('path')
  , work = require( path.join( __dirname, '../work.json' ) )
;

exports.index = function(req, res){
  console.log(work);
  res.render(
    'index',
    {
      title: 'Resume',
      name: 'Bryan Levay',
      work: work
    }
  );
};
