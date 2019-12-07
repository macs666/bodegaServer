var es = require('event-stream')

exports.eventtrigger = function(app) {
  var User = app.models.user;
  User.createChangeStream(function(err, changes) {
    changes.pipe(es.stringify()).pipe(process.stdout);
  });
}