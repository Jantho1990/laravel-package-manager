const laravel54 = require('./laravel-versions/laravel54'),
      config = require('./config')
      

class laravel
{
    constructor () {
        this.envvars = config.envvars
        console.log(this.envvars, 'rabbit')
    }
}

module.exports = laravel