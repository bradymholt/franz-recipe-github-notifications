const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const messageCount = parseInt(document.querySelectorAll('.js-notification-inboxes .count')[0].innerText);

    // set Franz badge
    Franz.setBadge(messageCount);
  };


  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
