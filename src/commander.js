const program = require('commander'),
      laravel = new (require('./laravel'))(),
      messenger = require('./messenger')

program
  .option('-n, --name', 'Change name of test project directory.')
  .command('build <version>')
  .description('Build a new test project with specified laravel')
  .action((version, name = 'test-project') => {
    messenger.warning('Whoops', 'Not implemented yet.')
    messenger.info('EnvVar', laravel.envvars.db_host)
  })

program.parse(process.argv)

module.exports = program