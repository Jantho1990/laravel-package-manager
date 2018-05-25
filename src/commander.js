const program = require('commander'),
      laravel = require('./laravel'),
      messenger = require('./messenger')

program
  .option('-n, --name', 'Change name of test project directory.')
  .command('build <version>')
  .description('Build a new test project with specified laravel')
  .action((version, name = 'test-project') => {
    messenger.info('Not implemented yet.')
  })

program.parse(process.argv)

module.exports = program