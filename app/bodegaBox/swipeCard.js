exports.cardSignIn = function(BodegaBox){

    BodegaBox.touchRfidcard = function(id,tagId,cb) {
        var User = BodegaBox.app.models.user
        var Cart = BodegaBox.app.models.Cart

        User.login(
            {
                username: tagId,
                password: tagId
            }, 'user', function(err, token) {
                if (err) {
                    cb(err,null)
                    return;
                }
                if (token != null) {
                    cb(null, {"token": token})
                    return
                } else {
                    var error = new Error();
                    error.status = 500;
                    error.message = 'Could not find user related to RFID card'; 
                    cb(error, null)
                }
            }
        );
    }

    BodegaBox.remoteMethod('touchRfidcard', {
        description: 'Blog details api with prevoius. next and related blogs',
        accepts: [
            {arg: 'id', http: 'path', type: 'string'},
            {arg: 'tagId', type: 'string', required: true},
        ],
        returns: {
          arg: 'user',
          type: 'object',
          root: true
        },
        http: {path: '/:id/touchRfidcard', verb: 'post'}
      });
}