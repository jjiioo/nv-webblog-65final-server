const UserController = require('./controllers/UserController')
const CommentController = require('./controllers/CommentController')
const ShortsController = require('./controllers/ShortsController')





module.exports = (app) => {
  app.post('/user', UserController.create)
  
  app.put('/user/:userId', UserController.put)
  
  app.delete('/user/:userId', UserController.remove)
  
  app.get('/user/:userId', UserController.show)
  
  app.get('/users', UserController.index)



  app.post('/Shorts',ShortsController.create)
  app.put('/Shorts/:ShortsId',ShortsController.put)
  app.delete('/Shorts/:ShortsId',ShortsController.remove)
  app.get('/Shorts/:ShortsId',ShortsController.show)
  app.get('/Shortss',ShortsController.index)


  app.post('/comment', CommentController.create)
  app.put('/comment/:commentId',CommentController.put)
  app.delete('/comment/:commentId',CommentController.remove)
  app.get('/comment/:commentId',CommentController.show)
  app.get('/comments',CommentController.index)



  app.post("/upload", function(req, res) {
      upload(req, res, function(err) {
        if(err){
        return res.end("Error uploading file");
        }
        res.end("File is uploaded");
      })
    })

  app.post('/upload/delete', async function (req, res) {
    try {
      const fs = require('fs');

      console.log(req.body.filename)
      fs.unlink(process.cwd() + '/public/uploads/' + req.body.filename,
      (err) => {
        if (err) throw err;
        res.send("Delete sucessful")
      });
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to delete file the material'
        })
    }
  })


}