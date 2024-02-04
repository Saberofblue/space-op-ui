Hooks.on('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({id: "basic", name: "☑ Dicefinder Basic"}, false);
  
    dice3d.addDicePreset({
      type: "d20",
      labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "modules/pathfinder-ui/ui/dice/basic/nat20.webp"
      ],
      system: "basic"
    });
    dice3d.addDicePreset({
      type: "dc",
      labels: [
        "modules/pathfinder-ui/ui/dice/basic/tail.webp",
        "modules/pathfinder-ui/ui/dice/basic/heads.webp"
      ],
      system: "basic"
    });

    dice3d.addDicePreset({
      type: "d2",
      labels: [
        "modules/pathfinder-ui/ui/dice/basic/tail_bump.webp",
        "modules/pathfinder-ui/ui/dice/basic/heads_bump.webp"
      ],
      system: "basic"
    });
  
    dice3d.addTexture("PFred", {
      name: "☑ Dicefinder Basic",
      composite: "source-over",
      source: "modules/pathfinder-ui/ui/dice/texture/texture.webp"
    })
    .then(() => {
      dice3d.addColorset({
        name: 'basic',
          description: "☑ Dicefinder Basic",
          category: "Pathfinder",
          texture: 'PFred',
          material: "chrome",
          foreground: "#c98e45",
          outline: 'none',
          edge: "#c98e45"
        },false);
    });

    dice3d.addSystem({id: "darkmode", name: "☑ Dicefinder Dark Mode"}, false);
  
    dice3d.addDicePreset({
      type: "d20",
      labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "modules/pathfinder-ui/ui/dice/basic/nat20.webp"
      ],
      system: "darkmode"
    });
    dice3d.addDicePreset({
      type: "dc",
      labels: [
        "modules/pathfinder-ui/ui/dice/basic/tail.webp",
        "modules/pathfinder-ui/ui/dice/basic/heads.webp"
      ],
      system: "darkmode"
    });

    dice3d.addDicePreset({
      type: "d2",
      labels: [
        "modules/pathfinder-ui/ui/dice/basic/tail_bump.webp",
        "modules/pathfinder-ui/ui/dice/basic/heads_bump.webp"
      ],
      system: "darkmode"
    });

    dice3d.addTexture("transparente", {
      name: "☑ Dicefinder Dark Mode",
      composite: "source-over",
      source: "modules/pathfinder-ui/ui/dice/texture/transparente.webp"
    })
    .then(() => {
      dice3d.addColorset({
        name: 'darkmode',
          description: "☑ Dicefinder Dark Mode",
          category: "Pathfinder",
          texture: 'transparente',
          material: "glass",
          foreground: "#c98e45",
          outline: 'none',
          edge: "#c98e45"
        },false);
    });
  });
  