
exports.SessionEndHandler= function(Session){

    Session.endSession = function(id,cb) {
        Session.findById(id, function(err,instance){
            if(instance != null) {
                let currentDate = new Date();
                instance.updateAttributes({'endTime': currentDate},function(err,updatedInstance) { 
                    cb(err, updatedInstance)
                })
            } else {
                var error = new Error();
                error.status = 500;
                error.message = 'Could not find session related to id'; 
                cb(error, null)
            }
        })
    }

    Session.remoteMethod('endSession', {
        description: 'Blog details api with prevoius. next and related blogs',
        accepts: [
            {arg: 'id', type: 'string', required: true}
        ],
        returns: {
          arg: 'session',
          type: 'object',
          root: true
        },
        http: {path: '/end', verb: 'post'}
      });
}