exports.cardSignIn = function(BodegaBox){

    BodegaBox.touchRfidcard = function(id,tagId,cb) {
        var User = BodegaBox.app.models.user
        var Cart = BodegaBox.app.models.Cart
        User.findOne({fields: {rfidTagId: tagId}}, function(err,instance){
            if(instance != null) {
                console.log(instance)
                cb(null, instance)
            } else if (err){
                cb(err,null)
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
            {arg: 'id', http: 'path', type: 'string'},
            {arg: 'tagId', type: 'string', required: true}
        ],
        returns: {
          arg: 'user',
          type: 'object',
          root: true
        },
        http: {path: '/:id/touchRfidcard', verb: 'post'}
      });
}