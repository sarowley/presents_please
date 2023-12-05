class Menu extends Phaser.Scene {
  constructor() {
    super("menuScene");
  }

  preload() {}

  create() {
    let menuConfig = {
      fontSize: "28px",
    };

    this.add.text(200, 200, "click", menuConfig).setOrigin(0.5);
  }

  update() {
    this.input.on("pointerdown", () => this.scene.start("playScene"));
  }
}
