var userTrigger = require('../../app/user/userSignedBox')
var sessionTrigger = require('../../app/session/sessionStart')

module.exports = function(app) {
    userTrigger.eventtrigger(app)
    sessionTrigger.eventtrigger(app)
}