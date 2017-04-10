var express = require('express');
var app = express();

app.use('/loc', express.static('../public'));

app.get('/promise', function(req, res, next) {
    var str = '测试promise';
    res.send(str);
});

app.get('/promise1', function(req, res) {
    res.send('第二个例子');
});

app.get('/promise2', function(req, res) {
    res.send('第三个例子');
})



app.listen(3001, function () {
  console.log('app is listening at port 3000');
});