let config = {
  type: Phaser.CANVAS,
  width: 640,
  height: 480,
  scene: [Menu, Play],
  physics: {
    default: "matter",
  },
};

let game = new Phaser.Game(config);
