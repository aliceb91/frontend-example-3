class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.hideButtonEl.addEventListener('click', () => {
      this.hideAllMessages();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    const div = document.createElement('div');
    div.append('This message displayed by JavaScript');
    div.setAttribute("id", "message");
    this.mainContainerEl.append(div);
  }

  hideAllMessages() {
    const divArr = this.mainContainerEl.querySelectorAll("div");
    divArr.forEach((div) => div.remove());
  }
}

module.exports = MessageView;