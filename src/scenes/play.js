class Play extends Phaser.Scene {
  constructor() {
    super("playScene");
  }

  preload() {
    this.load.image("letter", "./assets/letter.png");
    this.load.image("table", "./assets/table.png");
    this.load.image("letterPile", "./assets/pile_of_letters.png");
    this.load.image("tube", "./assets/pipe.png");
    this.load.image("letter0", "./assets/letter0.png");

    this.load.image("letter1", "./assets/letter1.png");

    this.load.image("letter2", "./assets/letter2.png");

    this.load.image("letter3", "./assets/letter3.png");
    this.load.image("snow", "./assets/snow.png");

    this.load.image("wall", "./assets/wall.png");

    this.load.image("snowfield", "./assets/snowfield.png");
    this.load.image("frame", "./assets/frame.png");
    this.load.image("nice", "./assets/nice.png");

    this.load.image("naughty", "./assets/naughty.png");
    this.load.image("karmabar", "./assets/karma_bar.png");

    this.load.image("snowflake", "./assets/snowflake.png");
    this.load.image("coalend", "./assets/coal.png");
    this.load.image("niceending", "./assets/nice_ending.png");
  }

  create() {
    this.karma = 0;
    this.niceScale = 0.6;
    this.naughtyScale = 0.5;
    this.niceScaleCheck = true;
    this.naughtyScaleCheck = true;

    this.wall = this.add.tileSprite(0, 0, 1000, 1000, "wall").setOrigin(0, 0);

    this.snowfield = this.add
      .tileSprite(325, 150, 256, 256, "snowfield")
      .setOrigin(0, 0)
      .setScale(0.6);
    this.snow = this.add
      .tileSprite(325, 150, 256, 256, "snow")
      .setOrigin(0, 0)
      .setScale(0.6);
    this.frame = this.add
      .tileSprite(325, 150, 256, 256, "frame")
      .setOrigin(0, 0)
      .setScale(0.6);

    this.nice = this.add
      .tileSprite(475, 175, 256, 256, "nice")
      .setOrigin(0, 0)
      .setScale(0.6);
    this.naughty = this.add
      .tileSprite(25, 175, 512, 256, "naughty")
      .setOrigin(0, 0)
      .setScale(0.5);

    this.karmabar = this.add
      .tileSprite(200, 50, 512, 70, "karmabar")
      .setOrigin(0, 0)
      .setScale(0.8);

    this.snowflake = this.add
      .tileSprite(375, 60, 64, 64, "snowflake")
      .setOrigin(0, 0)
      .setScale(0.7);

    this.matter.add.mouseSpring({ length: 1, stiffness: 1 }); //this is what lets you click on stuff

    this.letter = this.matter.add
      .image(100, 150, "letter")
      .setBounce(0.9)
      .setScale(0.1);
    this.collideTable = true; //variable to let letter spawn and not be deleted when touching the middle of the table

    this.table = this.matter.add
      .image(325, 450, "table", null, { isStatic: true })
      .setScale(1.2, 1); //adding table

    this.collisionTable = this.matter.add
      .image(325, 600, "doesnt matter", null, { isStatic: true })
      .setScale(200000, 3); //adding secret table to catch stray boxes and delete them

    this.collisionWall1 = this.matter.add
      .image(1500, 500, "doesnt matter", null, { isStatic: true })
      .setScale(3, 200000); //adding secret table to catch stray boxes and delete them

    this.collisionWall2 = this.matter.add
      .image(-700, 500, "doesnt matter", null, { isStatic: true })
      .setScale(3, 200000); //adding secret table to catch stray boxes and delete them

    this.tube = this.matter.add
      .image(100, -40, "tube", null, { isStatic: true })
      .setScale(0.7); //adding tube letters fall out of

    this.pile = this.matter.add
      .image(100, 450, "letterPile", null, { isStatic: true })
      .setScale(0.7); //adding letter pile

    this.matter.world.on("collisionstart", (event) => {
      //this is the collider
      if (this.letter.x < 0) {
        //if the letter goes to the left of the screen
        if ((this.number == 2) | (this.number == 3)) {
          //if it's a naughty letter
          this.snowflake.x += 50;
          this.karma += 1;
          if (this.karma > 4) {
            this.niceend = this.add
              .tileSprite(0, 0, 512, 512, "niceending")
              .setOrigin(0, 0)
              .setScale(1.3, 1);
            this.letter.destroy();
            return;
          }
        } else {
          this.karma -= 1;
          this.snowflake.x -= 50;
          if (this.karma < -4) {
            this.coalend = this.add
              .tileSprite(0, 0, 512, 512, "coalend")
              .setOrigin(0, 0)
              .setScale(1.3);
            this.letter.destroy();
            return;
          }
        }
        this.number = -1;
        this.letter.destroy();
        this.letter = this.matter.add
          .image(100, 150, "letter")
          .setBounce(0.9)
          .setScale(0.1);
      }
      if (this.letter.x > 640) {
        //if the letter goes to the right of the screen
        if ((this.number == 0) | (this.number == 1)) {
          // if it's a nice letter
          this.snowflake.x += 50;
          this.karma += 1;
          if (this.karma > 4) {
            this.niceend = this.add
              .tileSprite(0, 0, 512, 512, "niceending")
              .setOrigin(0, 0)
              .setScale(1.3, 1);
            this.letter.destroy();
            return;
          }
        } else {
          this.karma -= 1;
          this.snowflake.x -= 50;
          if (this.karma < -4) {
            this.coalend = this.add
              .tileSprite(0, 0, 512, 512, "coalend")
              .setOrigin(0, 0)
              .setScale(1.3);
            this.letter.destroy();
            return;
          }
        }
        this.number = -1;
        this.letter.destroy();
        this.collideTable = true;
        this.letter = this.matter.add
          .image(100, 150, "letter")
          .setBounce(0.9)
          .setScale(0.1);
      }
      if (this.letter.x < 150 && this.letter.x > 50) {
        //this is for landing in the letter pile
        this.letter.destroy();
        this.collideTable = true;
        this.letter = this.matter.add
          .image(100, 150, "letter")
          .setBounce(0.9)
          .setScale(0.1);
      }
      if (
        this.letter.x < 550 &&
        (this.letter.x > 250) & (this.collideTable == true)
      ) {
        //this is if it lands in the middle of the table
        this.currX = this.letter.x;
        this.currY = this.letter.y;
        this.letter.destroy();
        this.collideTable = false; //lets the letter not be destroyed by the table
        this.number = Math.floor(Math.random() * 4); // this returns 0-3
        if (this.number == 0) {
          //naughty letter
          this.letter = this.matter.add
            .image(this.currX, this.currY, "letter0")
            .setBounce(0.9)
            .setScale(0.2);
        }
        if (this.number == 1) {
          //naughty letter
          this.letter = this.matter.add
            .image(this.currX, this.currY, "letter1")
            .setBounce(0.9)
            .setScale(0.2);
        }
        if (this.number == 2) {
          //nice letter
          this.letter = this.matter.add
            .image(this.currX, this.currY, "letter2")
            .setBounce(0.9)
            .setScale(0.2);
        }
        if (this.number == 3) {
          //nice letter
          this.letter = this.matter.add
            .image(this.currX, this.currY, "letter3")
            .setBounce(0.9)
            .setScale(0.2);
        }
      }
    });
  }

  update() {
    if (this.karma > 4 || this.karma < -4) {
      this.input.on("pointerdown", () => this.scene.start("menuScene"));
    }

    this.snow.tilePositionX -= 2;
    this.snow.tilePositionY -= 1;

    //nice sign pulsing
    if (this.niceScaleCheck == true) {
      this.nice.setScale((this.niceScale += 0.002));
      if (this.niceScale > 0.7) {
        this.niceScaleCheck = false;
      }
    }
    if (this.niceScaleCheck == false) {
      this.nice.setScale((this.niceScale -= 0.002));
      if (this.niceScale < 0.6) {
        this.niceScaleCheck = true;
      }
    }

    //naughty sign pulsing
    if (this.naughtyScaleCheck == true) {
      this.naughty.setScale((this.naughtyScale -= 0.002));
      if (this.naughtyScale < 0.4) {
        this.naughtyScaleCheck = false;
      }
    }
    if (this.naughtyScaleCheck == false) {
      this.naughty.setScale((this.naughtyScale += 0.002));
      if (this.naughtyScale > 0.5) {
        this.naughtyScaleCheck = true;
      }
    }
  }
}
