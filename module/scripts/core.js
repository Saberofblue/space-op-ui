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
  
	game.settings.register('space-op-ui', 'hotfix', {
		name: game.i18n.localize('RPGUI.SETTINGS.HOTFIX'),
		hint: game.i18n.localize('RPGUI.SETTINGS.HOTFIX_HINT'),
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload();
		}
	});

  if (!game.settings.get('space-op-ui', 'hotfix')) { rpgUIAddHotfix() }

  ChatRollPrivacy.init();
});

Hooks.once('setup', function () {
	ChatRollPrivacy.setup();
});

function rpgUIAddHotfix() {
	const head = document.getElementsByTagName("head")[0];
	const mainCss = document.createElement("link");
	mainCss.setAttribute("rel", "stylesheet")
	mainCss.setAttribute("type", "text/css")
	mainCss.setAttribute("href", "modules/space-op-ui/styles/hotfix.css")
	mainCss.setAttribute("media", "all")
	head.insertBefore(mainCss, head.lastChild);
}

Hooks.on('renderSidebarTab', async (object, html) => {
	if (object instanceof Settings) {
	  const details = html.find('#game-details')
	  const list = document.createElement('ul')
	  list.innerHTML = await renderTemplate('modules/space-op-ui/templates/settings-info.hbs')
	  details.append(list.firstChild)
	}
});