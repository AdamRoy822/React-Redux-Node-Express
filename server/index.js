/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');

const resolve = require('path').resolve;
const app = express();
//const router = express.Router();
const apiRoutes = require('./routes');

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use('/api',apiRoutes);
// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

//require('./routes')(app, router);
// app.post('/api/create', () => {
//   console.log("server is running");
// });

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  logger.appStarted(port, prettyHost);
});
