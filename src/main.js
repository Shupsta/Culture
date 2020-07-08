/**
 * 
 * I copied the main.js from the Rocket Patrol assingment as a starter for
 * our project
 * 
 * 
 * 
 */


//config object, used by phaser to load the parameters of the game
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Overworld ]//array of the scenes we will use for the game
}
//creates the actual phaser game
let game = new Phaser.Game(config);

//define game settings
game.settings = {
    
}

//reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;