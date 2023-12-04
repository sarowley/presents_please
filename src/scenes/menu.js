class Menu extends Phaser.Scene {
  constructor() {
    super("menuScene");
  }

  preload() {}

  create() {
    let menuConfig = {
      fontFamily: "Courier",
      fontSize: "28px",
      backgroundColor: "#F3B141",
      color: "#843605",
      align: "right",
      padding: {
        top: 5,
        bottom: 5,
      },
      fixedWidth: 0,
    };

    this.add.text(200, 200, "menu", menuConfig).setOrigin(0.5);

    //define keys
    keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
      this.scene.start("playScene");
    }
  }
}
