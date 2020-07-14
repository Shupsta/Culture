class Story extends Phaser.Scene{

    constructor(){
        super("storyScene");
    }

    preload(){
        
    }

    create() {
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0

        }

        //show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;

        this.add.text(centerX, centerY - textSpacer, 'The Story of the Dogs!', menuConfig).setOrigin(0.5);
        this.add.text(centerX, centerY, 'A story of courage and loyalty!', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY + textSpacer, 'Press ESC to return to scene', menuConfig).setOrigin(0.5);
        
        //define keys
        keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        // keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        // this.add.text(20, 20, "Rocket Patrol Menu");
        // this.scene.start("playScene");
    }

    update(){

        if(Phaser.Input.Keyboard.JustDown(keyESC)) {
            this.scene.remove("storyScene");
        }
    }

}