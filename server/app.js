var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); 
var app = express();
var apiRouter = express.Router();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
apiRouter.get('/promise1', function(req, res) {
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.json({
        errno : 0,
        data : '第一个例子'
    })

});

apiRouter.post('/promise2', function(req, res) {
    console.log("post");
    // console.log(req);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
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

//app.use(multer()); // for parsing multipart/form-data

// app.post('/api/promise2', function(req, res) {
//     console.log("post test");
//     // console.log(req);
//     console.log(req.hostname);
//     console.log(req.query);
//     console.log(req.params);
//     console.log(req.body);
//     res.json({
//         errno : 0,
//         data : '第二个例子'
//     })
// });

app.listen(3001, function () {
  console.log('app is listening at port 3000');
});