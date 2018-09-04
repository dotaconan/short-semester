const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const http = require('http');
const debug = require('debug')('server1:server');
const uuid = require('uuid/v4')

const user_api = require('./router/users')
const article_api = require('./router/article')

const app = express()

// 连接数据库
const dbUrl = 'mongodb://localhost:27017/semester'
const db = mongoose.connect(dbUrl, { useMongoClient: true })

db.on("error", function(error) {
    console.log("数据库连接失败：" + error)
})
db.once("open", function() {
    console.log("------ 数据库连接成功！------")
})

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(session({
    secret: uuid(),
    cookie: {
        maxAge: 60 * 1000 * 30, // 过期时间（毫秒）
        httpOnly: true
    },
    store: new MongoStore({
        url: dbUrl,
        touchAfter: 30 * 60
    })
}));

// app.use('/static', express.static('./picture'));
// app.use(express.static('./uploads'));
// app.use('/picture', express.static('./picture'));
// app.use(express.static('./dist/'));

app.use('/user_api', user_api)
app.use('/article_api', article_api)

const port = normalizePort(process.env.PORT || '3456');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log(`Server running at http://localhost:${port}/`);
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}