const CONFIG_DEST = '../../src/config.json';

const logger = require('../utils/logger');
const fs = require('fs');
const path = require('path');

const settings = require('../../config');

let data = JSON.stringify(settings);  

filePath = path.resolve(__dirname, CONFIG_DEST);

logger.debug(`Writing to: ${filePath}`);

fs.writeFileSync(filePath, data)
