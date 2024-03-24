class PauseIconSubmenu extends FormApplication {
    constructor() {
        super({});
    }
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            closeOnSubmit: false,
            classes: ['form'],
            popOut: true,
            width: "550",
            height: "auto",
            template: `/modules/space-op-ui/templates/settings-submenu.html`,
            id: 'pause-icon-settings-submenu',
            title: 'Settings Submenu',
            resizable: false,
            
        });
    }
    activateListeners(html) {
        super.activateListeners(html);
        const picker = $(".pi-picker-button", html);
        picker[0].addEventListener("click", async function(){
            new FilePicker({
                type: "image",
                callback: async function (imagePath) {
                  $(".pi-path").val(imagePath);
                }}).render(true);
        })
    }
    getData() {
        let source = game.settings.get("space-op-ui", "allSettings");
        if (foundry.utils.isEmpty(source)) {
            source = {
                /*path: "icons/svg/clockwork.svg",*/
                path: "modules/space-op-ui/styles/systems/paused/paused-logo.webp",
                opacity: 50,
                dimensionX: 128,
                dimensionY: 128,
                text: game.i18n.format("GAME.Paused"),
                textColor: "#f7e06e",
                shadow: true,
                fontSize: 2,
                speed: "5"
            };
        }
        return source;
    }
    async _updateObject(event) {
        const button = event.submitter;
        if(button.name === "submit") {
            await game.settings.set("space-op-ui", "allSettings", {
                path: $(".pause-icon.pi-path").val(),
                opacity: Number($(".pause-icon.pi-opacity").val()),
                dimensionX: Number($(".pause-icon.pi-dimensionX").val()),
                dimensionY: Number($(".pause-icon.pi-dimensionY").val()),
                text: $(".pause-icon.pi-text").val(),
                textColor: $(".pause-icon.pi-text-color").val(),
                shadow: $(".pause-icon.pi-shadow").prop("checked"),
                fontSize: $(".pause-icon.pi-font-size").val(),
                speed: $(".pause-icon.pi-speed").val()
            });
            window.location.reload();
        }
    }
}
export const registerSettings = function () {
    game.settings.register("space-op-ui", "allSettings", {
        scope: 'world',
        config: false,
        type: Object,
        default: {
            /*path: "icons/svg/clockwork.svg",*/
            path: "modules/space-op-ui/styles/systems/paused/paused-logo.webp",
            opacity: 50,
            dimensionX: 128,
            dimensionY: 128,
            text: game.i18n.format("GAME.Paused"),
            textColor: "#f7e06e",
            shadow: true,
            fontSize: 2,
            speed: "8"
        },
    });
    game.settings.registerMenu("space-op-ui", "allSettings", {
        name: game.i18n.format("PAUSEICON.settings"),
        label: game.i18n.format("PAUSEICON.settingsButton"),
        icon: 'fas fa-atlas',
        type: PauseIconSubmenu,
        restricted: true
    })
};