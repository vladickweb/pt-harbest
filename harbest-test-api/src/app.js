import express from 'express';
import logger from 'morgan';
import http from 'http';

import config from '../config/index.js';
import loaders from './loaders/index.js';

const app = express();

app.use(logger('dev'));

async function startServer () {
  // Initialize loaders
  await loaders({ app });

  await new Promise((resolve) => {
    const server = http.createServer(app);
    app.application = server.listen(config.port, config.ip, function () {
      console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
      resolve();
    });
  });
}

async function main () {
  console.time('AppStartDuration');
  await startServer();
  console.log('App started');
  console.timeEnd('AppStartDuration');
}


if (process.env.NODE_ENV === 'test') {
  app.init = async () => {
    await main();
  };
} else {
  main();
}

export default app;