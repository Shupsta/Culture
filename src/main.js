// console.log("hello world");

// create game configuration object
let config = {
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    width: 934,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true,
        }
    },
    // scene: [Bunkakai, Art, Fashion, Music, ],
    scene: [ TiledPlatform, Story ],
};

// create main game object
let game = new Phaser.Game(config);

// globals
const centerX = game.config.width / 2;
const centerY = game.config.height / 2;
const w = game.config.width;
const h = game.config.h;
let cursors = null;

// reserve some keyboard bindings
let keyL, keyLEFT, keyRIGHT, keyUP, keyDOWN, keyESC;