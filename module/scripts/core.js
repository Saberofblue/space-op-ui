import ChatRollPrivacy from '../scripts/chat-roll-privacy.js';

Hooks.on('ready', async () => {
  // Retrait de la classe de Monk's Little Details
  // Créer une erreur lorsque le module n'est pas activé
  if (game.settings.settings.has('monks-little-details.window-css-changes')) {
      game.settings.set("monks-little-details", "window-css-changes", false);
      $("body").removeClass("change-windows");
  }
});

Hooks.on("init", () => {
  ChatRollPrivacy.init();
});

Hooks.once('setup', function () {
	ChatRollPrivacy.setup();
});

Hooks.on('renderSidebarTab', async (object, html) => {
	if (object instanceof Settings) {
	  const details = html.find('#game-details')
	  const list = document.createElement('ul')
	  list.innerHTML = await renderTemplate('modules/space-op-ui/templates/settings-info.hbs')
	  details.append(list.firstChild)
	}
});