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

/**
 * The theme scopes every rule to the body class Foundry sets for the active system (.system-starwarsffg).
 * When the Star Wars FFG system runs under another id (e.g. a parallel sandbox build, .system-starwarsffg_sandbox),
 * re-issue the stylesheets with that class so the theme applies there too. Generic: works for any id.
 */
Hooks.once("init", async () => {
  const upstreamId = "starwarsffg";
  const ownId = game.system.id;
  if (ownId === upstreamId) return;
  const rescope = (css) => css.replace(new RegExp(`\.system-${upstreamId}(?![\w-])`, "g"), `.system-${ownId}`);
  for (const file of ["compatibility.css", "core.css"]) {
    try {
      const css = await (await fetch(`modules/space-op-ui/styles/${file}`)).text();
      const style = document.createElement("style");
      style.dataset.spaceOpUi = file;
      style.textContent = rescope(css);
      document.head.append(style);
    } catch (err) {
      console.error(`space-op-ui | could not re-scope ${file} for system ${ownId}`, err);
    }
  }
});

// v13+ : the Settings sidebar tab is an ApplicationV2; its render hook is renderSettings with a native element
Hooks.on("renderSettings", async (app, html) => {
  const el = html instanceof HTMLElement ? html : html?.[0];
  // v14 lays the tab out as section.info (title, version, build/system/modules rows) - add our row there
  const info = el?.querySelector("section.info") ?? el?.querySelector("#game-details");
  if (!info || info.querySelector(".space-op-ui-info")) return;

  const row = document.createElement("div");
  row.className = "space-op-ui-info";
  row.innerHTML = await foundry.applications.handlebars.renderTemplate("modules/space-op-ui/templates/settings-info.hbs");
  info.append(row);
});
