// console.log("hello world");

// create game configuration object
let config = {
    type: Phaser.WEBGL,
    // width: 934,
    // height: 500,
    width: 1912,
    height: 1024,


    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Bunkakai, Art, Fashion, Music, ],
};

// create main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 600000
}

// reserve some keyboard bindings
let keyL, keyLEFT, keyRIGHT, keyUP, keyDOWN, keyA, keyF, keyM, keyX;