/**
 * Space Opera UI — core.js
 * Compatible FoundryVTT v13 (ApplicationV2, no jQuery)
 */

Hooks.on("ready", () => {
  // Retrait de la classe de Monk's Little Details
  // Crée une erreur lorsque le module n'est pas activé
  if (game.settings.settings.has("monks-little-details.window-css-changes")) {
    game.settings.set("monks-little-details", "window-css-changes", false);
    // v13 : plus de jQuery — on utilise l'API DOM native
    document.body.classList.remove("change-windows");
  }
});

Hooks.on("renderSidebarTab", async (app, html) => {
  if (!(app instanceof Settings)) return;

  // v13 : html peut être un HTMLElement natif (ApplicationV2) ou jQuery (App v1)
  // On normalise en récupérant toujours l'élément DOM brut
  const el = (html instanceof HTMLElement) ? html : html[0];
  const details = el?.querySelector("#game-details");
  if (!details) return;

  const list = document.createElement("ul");
  list.innerHTML = await renderTemplate(
    "modules/space-op-ui/templates/settings-info.hbs",
  );
  if (list.firstChild) details.append(list.firstChild);
});
