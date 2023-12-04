let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ],
    physics:{
        default: "arcade",
        arcade : {
        }
    },
}

let game = new Phaser.Game(config);
//reserve keyboard vars
let keySPACE;
let keyLEFT;
let keyRIGHT;
let keyDOWN;