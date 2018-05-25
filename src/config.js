const yaml = require('js-yaml'),
      fs = require('fs-extra')

module.exports = yaml.safeLoad(fs.readFileSync('config.yaml'))