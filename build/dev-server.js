require('./check-versions')();

var config = require('../config');
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn');
var path = require('path');
var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware');
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf');
var bodyParser = require('body-parser');
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port;
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable;

var app = express();
var compiler = webpack(webpackConfig);

var apiRouter = express.Router();


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

apiRouter.get('/promise1', function(req, res) {
    console.log('get');
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    console.log(req.test);
    res.json({
        errno : 0,
        data : '第一个例子'
    })

});

apiRouter.post('/promise2', function(req, res) {
    console.log('post');
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    console.log(req.test);
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

app.get('/crawler', function(req, res) {
  superagent.get('http://tieba.baidu.com/f?ie=utf-8&kw=%E7%81%AB%E5%BD%B1%E5%BF%8D%E8%80%85%E6%89%8B%E6%B8%B8')
    .end(function(err, sres) {
      if(err) {
        return;
        var $ = cheerio.load(sres.text);
        console.log(req);
      }
    });
});
  

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
});
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options));
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'));

var uri = 'http://localhost:' + port;

var _resolve;
var readyPromise = new Promise(resolve => {
  _resolve = resolve
});

console.log('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n');
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri);
  }
  _resolve();
})

var server = app.listen(port);

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
