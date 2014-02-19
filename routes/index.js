
/*
 * GET home page.
 */

var path = require('path')
  , work = require( path.join( __dirname, '../work.json' ) )
  , education = require( path.join( __dirname, '../education.json' ) )
;

exports.index = function(req, res){
  res.render(
    'index',
    {
      title: 'Resume',
      name: 'Bryan Levay',
      work: work,
      education: education,

    }
  );
};
