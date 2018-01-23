const Message = require('./message.model');
const fs = require('fs');
const path = require('path');

class MessageService {
  constructor() {
    let resolvePromise;
    let rejectPromise;
    const filePath = path.join(__dirname, 'messages.json');
    this.messagesPromise = new Promise((resolve, reject) => {
      resolvePromise = resolve;
      rejectPromise = reject;
    });
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return rejectPromise(err);
      }
      const dataArray = JSON.parse(data);
      const dataObj = dataArray.map(item =>
        new Message(item.text, item.created));
      return resolvePromise(dataObj);
    });
  }
  get messages() {
    return this.messagesPromise;
  }
}

const messageService = new MessageService();
messageService.messages.then((messages) => {
  for (let x = 0; x < messages.length; x += 1) {
    console.log(String(messages[x]));
  }
}).catch((err) => {
  console.log(err);
});
