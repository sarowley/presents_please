class Menu extends Phaser.Scene {
  constructor() {
    super("menuScene");
  }

  preload() {}

  create() {
    let titleConfig = {
      fontSize: "28px",
    };
    let menuConfig = {
      fontSize: "20px",
    };

    //this.add.text(500, 450, "see you space cowboy", menuConfig).setOrigin(0.5);
    this.add.text(50, 50, "Presents Please", titleConfig);
    this.add.text(50, 100, "This game is played with the mouse", menuConfig)
    this.add.text(50, 150, "Click and hold to grab letters as they fall", menuConfig)
    this.add.text(50, 200, "Drop the letter on the table to open it", menuConfig)
    this.add.text(50, 250, "Click and drag to throw it to the left or right", menuConfig)
    this.add.text(50, 300, "Click to begin", menuConfig);
    this.add.text(200, 450, "Made by Miles Marsh and Sean Rowley", menuConfig);
  }

  update() {
    this.input.on("pointerdown", () => this.scene.start("playScene"));
  }
}
