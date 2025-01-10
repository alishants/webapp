const fetch = require('node-fetch');  // Здесь мы используем require для node-fetch версии 2.x

const token = '7433319114:AAEzW9uU3lQ3l7SZtiR8m60s9Z1FZ9kKHZU';  // Твой токен бота
const chatId = '591775682';   // Идентификатор чата, куда будет отправлено сообщение

const url = `https://api.telegram.org/bot${token}/sendMessage`;

const button = {
  text: 'Open Web App',
  web_app: {
    url: 'https://app.lava.top/topone?subscriptionOfferId=b44dd6b0-dddc-4e1b-8ae6-b4601577e822'  // Укажи ссылку на свое веб-приложение
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

