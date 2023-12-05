class Play extends Phaser.Scene {
  constructor() {
    super("playScene");
  }

  preload() {}

  create() {
    this.matter.add.mouseSpring({ length: 1, stiffness: 1 }); //this is what lets you click on stuff

    this.letter = this.matter.add.image(100, 200, "letter").setBounce(0.9);
    this.collideTable = true; //variable to let letter spawn and not be deleted when touching the middle of the table

    this.table = this.matter.add
      .image(325, 500, "table", null, { isStatic: true })
      .setScale(20, 3); //adding table

    this.collisionTable = this.matter.add
      .image(325, 500, "doesnt matter", null, { isStatic: true })
      .setScale(200000, 3); //adding secret table to catch stray boxes and delete them

    this.collisionWall1 = this.matter.add
      .image(1500, 500, "doesnt matter", null, { isStatic: true })
      .setScale(3, 200000); //adding secret table to catch stray boxes and delete them

    this.collisionWall2 = this.matter.add
      .image(-700, 500, "doesnt matter", null, { isStatic: true })
      .setScale(3, 200000); //adding secret table to catch stray boxes and delete them

    this.tube = this.matter.add
      .image(100, 0, "tube", null, { isStatic: true })
      .setScale(3, 10); //adding tube letters fall out of

    this.pile = this.matter.add
      .image(100, 450, "letterPile", null, { isStatic: true })
      .setScale(3); //adding letter pile

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
        this.letter = this.matter.add.image(100, 200, "letter").setBounce(0.9);
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
        this.letter = this.matter.add.image(100, 200, "letter").setBounce(0.9);
      }
      if (this.letter.x < 150 && this.letter.x > 50) {
        //this is for landing in the letter pile
        this.letter.destroy();
        this.collideTable = true;
        this.letter = this.matter.add.image(100, 200, "letter").setBounce(0.9);
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
            .setBounce(0.9);
        }
        if (this.number == 1) {
          //naughty letter
          this.letter = this.matter.add
            .image(this.currX, this.currY, "letter1")
            .setBounce(0.9);
        }
        if (this.number == 2) {
          //nice letter
          this.letter = this.matter.add
            .image(this.currX, this.currY, "letter2")
            .setBounce(0.9);
        }
        if (this.number == 3) {
          //nice letter
          this.letter = this.matter.add
            .image(this.currX, this.currY, "letter3")
            .setBounce(0.9);
        }
      }
    });
  }

  update() {}
}
