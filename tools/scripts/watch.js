const CONFIG_DEST = '../../src/config.json';

const logger = require('../utils/logger');
const fs = require('fs');
const watch = require('node-watch')
const path = require('path');
const settings = require('../../config');

watch(path.resolve(__dirname, '../../config.js'), function(event, filename) {
  let data = JSON.stringify(settings);  

  filePath = path.resolve(__dirname, CONFIG_DEST);

  logger.debug(`Writing to: ${filePath}`);

  fs.writeFileSync(filePath, data)

})
