/**************
 * Very simple message formatter that only sends messages to console.
 **************/

const chalk = require('chalk')

let addSpacing = true

/**
 * Toggle for whether space should be added above and below a message.
 */
function addPadding(bool) {
  addSpacing = !!bool
}

/**
 * Log to console.
 * 
 * @param  title  "The header of the message."
 * @param  content  "The message content."
 * @param  otherData  "Any other messages you want to include."
 * @param  color  "The font color of the content."
 * @param  titleBgColor  "The background color for the title."
 * @param  titleColor  "The font color of the title."
 * @return void
 */
function sendMessage(title = '', content = '', otherData = [], color, titleBgColor = 'bgWhite', titleColor = "black") {
  if (addSpacing) {
    console.log('')
  }
  if (typeof titleBgColor === 'undefined') {
    titleColor = 'white'
    titleBgColor = 'bg' + color.charAt(0).toUpperCase() + color.slice(1)
  } else {
    titleColor = typeof titleColor !== 'undefined' ? titleColor : 'white'
    titleBgColor = titleBgColor.substr(2) === 'bg' ? titleBgColor : 'bg' + titleBgColor.charAt(0).toUpperCase() + color.slice(1)
  }
  console.log(chalk[titleColor][titleBgColor].bold(title.toUpperCase()))
  console.log(chalk[color](content))
  if (otherData.length !== 0) {
    console.log(chalk.white.bold('OTHER DATA:'))
    otherData.forEach(data => console.log(chalk.white(data)))
  }
  if (addSpacing) {
    console.log('')
  }
}

/**
 * Send an error message.
 * 
 * @param  title  "The title of the message."
 * @param  content  "The content of the message."
 * @param  otherData  "Any other messages you want to include."
 * @return void
 */
function error(title, content, ...otherData) {
  sendMessage('ERROR --- ' + title, content, otherData, 'red')
}

/**
 * Send an info message.
 * 
 * @param  title  "The title of the message."
 * @param  content  "The content of the message."
 * @param  otherData  "Any other messages you want to include."
 * @return void
 */
function info(title, content, ...otherData) {
  sendMessage(title, content, otherData, 'blue')
}

/**
 * Send a warning message.
 * 
 * @param  title  "The title of the message."
 * @param  content  "The content of the message."
 * @param  otherData  "Any other messages you want to include."
 * @return void
 */
function warning(title, content, ...otherData) {
  sendMessage('WARNING --- ' + title, content, otherData, 'yellow', 'yellow', 'black')
}

module.exports = {
  info,
  error,
  warning,
  addPadding
}
