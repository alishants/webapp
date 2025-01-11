const fetch = require('node-fetch');  // Здесь мы используем require для node-fetch версии 2.x

const token = '';  // Твой токен бота
const chatId = '';   // Идентификатор чата, куда будет отправлено сообщение

const url = `https://api.telegram.org/bot${token}/sendMessage`;

const button = {
  text: 'Open Web App',
  web_app: {
    url: ''  // Укажи ссылку на свое веб-приложение
  }
};

const message = {
  chat_id: chatId,
  text: 'Click the button below:',
  reply_markup: {
    inline_keyboard: [[button]]
  }
};

fetch(url, {
  method: 'POST',
  body: JSON.stringify(message),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log('Error:', err));

