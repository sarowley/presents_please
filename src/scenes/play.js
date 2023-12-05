class Play extends Phaser.Scene {
  constructor() {
    super("playScene");
  }

  preload() {
    
    this.load.image("letter", "./assets/letter.png");
    this.load.image("table", "./assets/table.png");
    this.load.image("letterPile", "./assets/pile_of_letters.png");
    this.load.image("tube", "./assets/pipe.png");
    this.load.image("letter0", "./assets/blank_letter.png");

    this.load.image("letter1", "./assets/blank_letter.png");

    this.load.image("letter2", "./assets/blank_letter.png");

    this.load.image("letter3", "./assets/blank_letter.png");
    this.load.image("snow", "./assets/snow.png");

    this.load.image("wall", "./assets/wall.png");

    this.load.image("snowfield", "./assets/snowfield.png");
    this.load.image("frame", "./assets/frame.png");

    
  }

  create() {


    this.wall = this.add.tileSprite(0,0,1000,1000, "wall").setOrigin(0,0);

    this.snowfield = this.add.tileSprite(325, 150, 256, 256, "snowfield").setOrigin(0,0).setScale(0.6);
    this.snow = this.add.tileSprite(325, 150, 256, 256, 'snow').setOrigin(0, 0).setScale(0.6);
    this.frame = this.add.tileSprite(325, 150, 256, 256, 'frame').setOrigin(0, 0).setScale(0.6);

    this.matter.add.mouseSpring({ length: 1, stiffness: 1 }); //this is what lets you click on stuff

    this.letter = this.matter.add.image(100, 200, "letter").setBounce(0.9).setScale(0.1);
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
      .setScale(1); //adding tube letters fall out of

    this.pile = this.matter.add
      .image(100, 450, "letterPile", null, { isStatic: true })
      .setScale(0.7); //adding letter pile

    this.matter.world.on("collisionstart", (event) => {
      //this is the collider
      if (this.letter.x < 0) {
        //if the letter goes to the left of the screen
        if ((this.number == 0) | (this.number == 1)) {
          //if it's a naughty letter
          console.log("correct");
        } else {
          console.log("incorrect");
        }
        this.number = -1;
        this.letter.destroy();
        this.letter = this.matter.add.image(100, 200, "letter").setBounce(0.9).setScale(0.1);
      }
      if (this.letter.x > 640) {
        //if the letter goes to the right of the screen
        if ((this.number == 2) | (this.number == 3)) {
          // if it's a nice letter
          console.log("correct");
        } else {
          console.log("incorrect");
        }
        this.number = -1;
        this.letter.destroy();
        this.collideTable = true;
        this.letter = this.matter.add.image(100, 200, "letter").setBounce(0.9).setScale(0.1);
      }
      if (this.letter.x < 150 && this.letter.x > 50) {
        //this is for landing in the letter pile
        this.letter.destroy();
        this.collideTable = true;
        this.letter = this.matter.add.image(100, 200, "letter").setBounce(0.9).setScale(0.1);
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
        console.log(this.number); //this is the number
        if (this.number == 0) {
          //naughty letter
          this.letter = this.matter.add
            .image(this.currX, this.currY, "letter0")
            .setBounce(0.9).setScale(0.1);
        }
        if (this.number == 1) {
          //naughty letter
          this.letter = this.matter.add
            .image(this.currX, this.currY, "letter1")
            .setBounce(0.9).setScale(0.1);
        }
        if (this.number == 2) {
          //nice letter
          this.letter = this.matter.add
            .image(this.currX, this.currY, "letter2")
            .setBounce(0.9).setScale(0.1);
        }
        if (this.number == 3) {
          //nice letter
          this.letter = this.matter.add
            .image(this.currX, this.currY, "letter3")
            .setBounce(0.9).setScale(0.1);
        }
      }
    });
  }

  update() {
    this.snow.tilePositionX -= 2;
    this.snow.tilePositionY -= 1;

    // this.wall.tilePositionX -= 10;

  }
}
