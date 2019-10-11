exports.cardSignIn = function(BodegaBox){

    BodegaBox.touchRfidcard = function(tagId,cb) {
        var User = BodegaBox.app.models.user
        User.findOne({fields: {rfidTagId: tagId}}, function(err,instance){
            cb()
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
        http: {path: '/:id/blogDetails', verb: 'get'}
      });
}