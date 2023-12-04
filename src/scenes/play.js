class Play extends Phaser.Scene {
  constructor() {
    super("playScene");
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

    //this.add.text(200, 200, "play", menuConfig).setOrigin(0.5);

    //define keys
    keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    this.letter = this.physics.add.sprite(100, 150, "letter");
    this.letter.setVelocityY(50);

    this.table = this.physics.add.staticGroup();
    this.table.create(325, 400, "table").setScale(20, 3);

    this.tube = this.physics.add.staticGroup();
    this.table.create(100, 0, "tube").setScale(3, 10);

    this.dude = this.add.image(100,400, "letterPile")

    this.tableLetter = this.add.image(300, 400, "letter2")
    this.tableLetter.setVisible(false);
  }

  update() {
    //console.log(this.letter.y);
    if (this.letter.y > 400) {
      this.letter.y = 150;
    }

    if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
        this.tableLetter.setVisible(true);
    }
    if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {
        console.log("down")
      }
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        this.tableLetter.setVisible(false);
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        this.tableLetter.setVisible(false);
      }
  }
}
