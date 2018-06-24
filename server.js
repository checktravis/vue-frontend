const watch = require('node-watch')
const path = require('path');
const logger = require('./tools/utils/logger');

logger.debug(`start.`);

var spawn = require('child_process').spawn;
var vueserver = spawn('npm', ['run', 'serve', '--verbose'], { stdio: 'inherit' });
vueserver.on('close', (code, signal) => {
  console.log(
    `child process terminated due to receipt of signal ${signal}`);
});
vueserver.on('error', function(err) {
  console.error(err);
  process.exit(1);
});

watch(path.resolve(__dirname, './config.js'), function(event, filename) {
  logger.debug(`shanged.`);
  vueserver.kill('SIGHUP');
})


