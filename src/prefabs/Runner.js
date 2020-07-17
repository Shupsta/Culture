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

        // if (this.x >= 1912) {

        //     this.reset();
        // }

        if (keyUP.isDown) {
            this.myJump = true;
        }
        this.jump();
    }

    // reset() {
    //     // this.x = game.config.width;
    //     // this.x = 640;
    // }



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

        if(Phaser.Input.Keyboard.JustDown(left)) {
            this.stateMachine.transition('walkLeft');
            return;
        }

        if(Phaser.Input.Keyboard.JustDown(up)) {
            this.stateMachine.transition('jump');
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

        if(up.isDown){
            this.stateMachine.transition('jump');
        }

        if(right.isDown){
            runner.x += 5
        }
        

    }
}

class WalkLeft extends State{

    enter(scene, runner){
        runner.anims.play('kittyAni'); //need a walking left anim
    }

    execute(scene, runner){

        const {left, right, up, down, space, shift} = scene.keys;

        if(!left.isDown){
            this.stateMachine.transition('idle');
            return;
        }

        if(up.isDown){
            this.stateMachine.transition('jump');
        }

        if(left.isDown){
            runner.x -= 5
        }
        
    }
}

class Jump extends State{

    enter(scene, runner){
        runner.anims.play('kittyAni');
        

    }

    execute(scene, runner){

        const {left, right, up, down, space, shift} = scene.keys;

        if(!up.isDown && !right.isDown && !left.isDown){
            runner.myJump = false;
            this.stateMachine.transition('idle')
        }
        if(!up.isDown && right.isDown){
            runner.myJump = false;
            this.stateMachine.transition('walkRight')
        }
        if(!up.isDown && left.isDown){
            runner.myJump = false;
            this.stateMachine.transition('walkLeft')
        }
        if(up.isDown){
            runner.myJump = true;
            runner.jump();
        }

        

        
    }
}