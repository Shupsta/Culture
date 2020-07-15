// Runner prefab
class Runner extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue, direction) {
        super(scene, x, y, texture, frame);
        this.direction = direction;
        // add object to the existing scene
        scene.add.existing(this);

        // store point value    
        this.points = pointValue;
    }

    update(){
        // move Collectable right
        // this.x += game.settings.spaceshipSpeed - 1;
        // wraparound from right to left edge
        this.x += 200;
        if (this.x >=  950){
            this.reset();
        }
    }
    reset(){
        // this.x = game.config.width;
        // this.x = -64;
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