var express = require('express');
var app = express();
var apiRouter = express.Router();

apiRouter.get('/promise1', function(req, res) {
    res.json({
        errno : 0,
        data : '第一个例子'
    })

});

apiRouter.get('/promise2', function(req, res) {
    res.json({
        errno : 0,
        data : '第二个例子'
    })

});

apiRouter.get('/promise3', function(req, res) {
    res.json({
        errno : 0,
        data : '第三个例子'
    })

});

app.use('/loc', express.static('../public'));

app.use('/api', apiRouter);



app.listen(3001, function () {
  console.log('app is listening at port 3000');
});