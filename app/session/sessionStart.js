
var es = require('event-stream')

exports.eventtrigger = function(app) {
  var SessionModel = app.models.Session;

  SessionModel.createChangeStream(function(err, changes) {
    console.log(changes)
    changes.pipe(es.stringify()).pipe(process.stdout);
  });
}