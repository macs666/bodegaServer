'use strict';


var sessionModule = require('../../app/session/SessionEnd')

module.exports = function(Session) {
    sessionModule.SessionEndHandler(Session) 
};
