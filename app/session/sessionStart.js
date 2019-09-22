
var es = require('event-stream');

exports.eventtrigger = function(app) {
  var SessionModel = app.models.Session;
  SessionModel.createChangeStream(function(err, changes) {
    changes.pipe(es.stringify()).pipe(process.stdout);
  });
}