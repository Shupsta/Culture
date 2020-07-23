class Bunkakai extends Phaser.Scene{
    constructor() {
        super("bunkakaiScene");
    }

    preload(){

        //Config object for Loading text
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '60px',
            backgroundColor: '#FACADE',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0

        }

        this.add.text(centerX, centerY - 64, 'Loading', menuConfig).setOrigin(0.5);//writes loading text above loading bar

        /**
         * Progress bar credit to 
         * https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/
         */
        var progressBar = this.add.graphics();//creates progressBar
        var progressBox = this.add.graphics();//boarder around progressBar
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(centerX - 320 / 2, centerY, 320, 50);

        this.load.on('progress', function (value) {//uses the built in progress event from Phaser
            console.log(value);
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(centerX - 320 / 2, centerY, 300 * value, 30);
        });
                    
        this.load.on('fileprogress', function (file) {//can be used to display info of each loading file
            console.log(file.src);
        });
         
        this.load.on('complete', function () {//phaser event for end of loading to destroy the loading screen
            console.log('complete');
            progressBar.destroy();
            progressBox.destroy();
        });




        // load splash screen
        this.load.image('splash_screen', './assets/splash.jpg');

        //loading from Art Scene
        this.load.image('redHeart', './assets/redHeart.png');
        this.load.image('sidewalk', './assets/sidewalk.png');
        this.load.image('hills', './assets/hills.png');
        this.load.image('sky', './assets/sky.png');
        this.load.image('nightSky', './assets/starryBackground.jpg');
        this.load.image('circle', './assets/circle-8x8.png');
        this.load.image('moon', './assets/moon.png');
        this.load.image('staryNight', './assets/staryNight.png');
        this.load.image('fields', './assets/fields.png');
        this.load.image('bridge', './assets/bridge.png');


        // load audio files
        this.load.audio('sfx_select', './assets/iPhoneCameraSound.mp3');
        this.load.audio('sfx_explosion', './assets/sagoi.wav');
        this.load.audio('sfx_rocket', './assets/yeah.wav');
        this.load.audio('beem', './assets/yeah.wav');
        this.load.audio('artbgm', './assets/artbgm.mp3');
        this.load.audio('fashionbgm', './assets/bunkakaiFashionGroove.mp3');
        this.load.audio('musicbgm', './assets/bunkakaiFashionGroove.mp3');
        this.load.audio('ohno', './assets/ohno.wav');


    }


    create(){
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)

        // display splash screen
        this.splashScreen = this.add.tileSprite(0, 0, 1912, 1024, 'splash_screen').setOrigin(0, 0);

        // menu dispay
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#f00',
            color: '#000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // show menu text
        let centerX = game.config.width * .7;
        let centerY = game.config.height * .63;
        let textSpacer = 64;

        this.add.text(centerX, centerY - textSpacer - textSpacer, 'Bunkakai', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#f00';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY - textSpacer, 'Use arrows ↑ ↓ to move', menuConfig).setOrigin(0.5);
        // this.add.text(centerX, centerY, '(L) to Love', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#f00';
        menuConfig.color = '#000';
        this.add.text(centerX, centerY + 0, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);
    }

    update(){ // ideally every frame
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)){
            // yasashi modo desu
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 600000
            }
            this.sound.play('sfx_select');
            this.scene.start("artScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            // hardo modo desu
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 450000
                // gameTimer: 7000
            }
            this.time.now = 0;
            this.sound.play('sfx_select');
            this.scene.start("artScene");
        }
    }
}

