exports.cardSignIn = function(BodegaBox){

    BodegaBox.touchRfidcard = function(tagId,cb) {
        var User = BodegaBox.app.models.user
        User.findOne({fields: {rfidTagId: tagId}}, function(err,instance){
            if(instance != null) {
                cb(null, instance)
            } else {
                var error = new Error();
                error.status = 500;
                error.message = 'Could not find user related to RFID card'; 
                cb(error, null)
            }
        })
    }

    BodegaBox.remoteMethod('touchRfidcard', {
        description: 'Blog details api with prevoius. next and related blogs',
        accepts: [
            {arg: 'tagId', type: 'string', required: true}
        ],
        returns: {
          arg: 'user',
          type: 'object',
          root: true
        },
        http: {path: '/touchRfidcard', verb: 'post'}
      });
}