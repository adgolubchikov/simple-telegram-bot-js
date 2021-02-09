## Simple Telegram bot on Node.js

### Installation

You can install it from npm `npm install simple-telegram-bot-js`  
Or clone this repository and `require('./telegram-bot.js')`  

### Usage

Firstly, require the package `const TelegramBot = require('simple-telegram-bot-js')`  
Secondly, declare the access token `const myToken = 'TOKEN'`  
Then, declare the callback function that receives message and responds also a message:  
`const myCallback = (message) => 'Hello World!';`  
Your callback function gets an object like  
`{`  
`action:` action like `/start` etc without other chars   
`chat_id:` Chat ID  
`text:` Message text  
`message:` Standard Telegram message object  
`}`  

Then, set the bot `const myBot = new TelegramBot(myToken, myCallback);`  
Finally, launch the bot `myBot.start();`  
Also, you can send specified message to specified chat not as response (for example, as a notification by timer) using `myBot.send({chat_id: Chat ID, text: 'Your message'});`  


### Examples

See `example.js`

