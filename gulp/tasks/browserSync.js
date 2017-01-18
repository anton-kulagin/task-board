import config      from '../config';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import url        from 'url';
import path        from 'path';

gulp.task('browserSync', function () {
    let fs = require('fs');

    let getMockName = function (method, apiName) {
        return method + apiName;
    };
    let mocks = {
        'gettasks': function (req, res) {
            fs.readFile(config.jsonDir + 'tasks.json', function (err, data) {
                res.setHeader('Content-Type', 'application/json');
                res.end(data);
                if (err) {
                    console.log(err)
                }
            });
        },
        'posttasks': function (req, res, body) {
            var tasks = body;
            try {

                fs.writeFile(config.jsonDir + 'tasks.json', JSON.stringify(tasks, null, 4), function (err) {
                    if (err) {
                        console.log(err)
                    }
                    res.setHeader('Content-Type', 'application/json');
                    res.setHeader('Cache-Control', 'no-cache');
                    res.end(JSON.stringify(tasks));

                });

            } catch (e) {
                console.log(e)
            }
        }
    };

    var defaultFile = 'index.html';
    var folder = path.resolve(__dirname, '../../build/');

    browserSync.init({
        files: [config.buildDir + 'css/*.css', config.buildDir + 'js/*.js', config.buildDir + 'index.html'],
        server: {
            baseDir: config.buildDir,
            middleware: [
                function (req, res, next) {
                    var fileName = url.parse(req.url);
                    fileName = fileName.href.split(fileName.search).join('');
                    var fileExists = fs.existsSync(folder + fileName);
                    if (!fileExists && fileName.indexOf('browser-sync-client') < 0 && fileName.indexOf('tasks') == -1) {
                        req.url = '/' + defaultFile;
                    }
                    return next();
                },
                {
                    route: '/tasks',
                    handle: function (req, res) {
                        let apiName = 'tasks',
                            method = req.method.toLowerCase(),
                            bodyReq;
                        req.on('data', function (chunk) {
                            bodyReq = JSON.parse(chunk.toString());
                        })

                        req.on('end', function () {
                            if (mocks[getMockName(method, apiName)]) {
                                mocks[getMockName(method, apiName)](req, res, bodyReq);
                            }
                        });
                    }
                }
            ]
        },
        port: config.browserPort,
        ui: {
            port: config.UIPort
        },
        ghostMode: {
            links: true
        }
    });

});
