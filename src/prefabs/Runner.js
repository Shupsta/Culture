// Runner prefab
class Runner extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, direction) {
        super(scene, x, y, texture, frame);
        this.direction = direction;
        // add object to the existing scene
        scene.add.existing(this);

        // store point value    
        this.points = pointValue;
        this.myJump = false;
    }

    update() {
        // move Collectable right
        // this.x += game.settings.spaceshipSpeed - 1;
        // wraparound from right to left edge

        if (this.x >= 1912) {

            this.reset();
        }
        this.moveForWard();

        if (keyUP.isDown) {
            this.myJump = true;
        }
        this.jump();
    }

    reset() {
        // this.x = game.config.width;
        // this.x = 640;
    }

    moveForWard() {
        // if (Phaser.Input.Keyboard.JustDown(keyRIGHT)){
        if (keyRIGHT.isDown) {
            this.x += 5
        }
    }


    jump() {
            // make runner go up
            if (this.myJump && (this.y >= 300)) {
                this.y -= 10;
                if (this.y <= 300) {
                    this.myJump = false;
                    return;
                }
            }

        if (!this.myJump || this.y <= 300) {
            this.y += 10;
            console.log(this.y);
            if (this.y >= 575) {
                this.y = 575;
                this.direction = true;
                return;
            }
        }
    }
}

class IdleState extends State{

    enter(scene, runner){
        runner.anims.stop();
    }

    execute(scene, runner){

        const {left, right, up, down, space, shift} = scene.keys;

        if(Phaser.Input.Keyboard.JustDown(right)) {
            this.stateMachine.transition('walkRight');
            return;
        }

    }

}

class WalkRight extends State{

    enter(scene, runner){
        runner.anims.play('kittyAni');
    }

    execute(scene, runner){

        const {left, right, up, down, space, shift} = scene.keys;

        if(!right.isDown){
            this.stateMachine.transition('idle');
            return;
        }

        if(right.isDown){
            runner.update();
        }
    }
}