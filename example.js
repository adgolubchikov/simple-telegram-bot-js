const TelegramBot = require('./telegram-bot.js');

const token = 'TOKEN';

const exampleCallback = (message) => {
	if (message.action == '/start') {
		return 'Hello World!';
	}
	if (message.action == '/hello') {
		if (message.text.split(' ').length == 2) {
			return 'Hello, ' + message.text.split(' ')[1];
		} else {
			return 'Hello, Noname';
		}
	}
	if (message.action == '/me') {
		const firstName = message.message.from.first_name;
		const lastName = typeof message.message.from.last_name !== undefined ? message.message.from.last_name : '';
		const username = typeof message.message.from.username !== undefined ? message.message.from.username : '';

		return 'You\'re ' + firstName + (lastName !== '' ? ' ' + lastName : '') + (username !== '' ? ' (@' + username + ')' : '');
	}
	if (message.action == '/weather') {
		return '+25°C';
	}
};

const exampleBot = new TelegramBot(token, exampleCallback);

exampleBot.start();
