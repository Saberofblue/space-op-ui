import ChatRollPrivacy from '../scripts/chat-roll-privacy.js';

Hooks.on("init", () => {
  ChatRollPrivacy.init();
});

Hooks.once('setup', function () {
	ChatRollPrivacy.setup();
});