class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.MovementSpeed = 2;
        this.isFiring = false;
    }

    update() {
        if(this.isFiring) {
            this.y -= this.MovementSpeed;
            if(this.y < borderUISize*3) {
                this.y = game.config.height-borderUISize-borderPadding;
                this.isFiring = false;
            }
        } else {
            if(keyLeft.isDown) {
                this.x -= this.MovementSpeed;
            }
            if(keyRight.isDown) {
                this.x += this.MovementSpeed;
            }
            
            if(Phaser.Input.Keyboard.JustDown(keyF)) {
                this.isFiring = true;
            }

            //restrict rocket movement to remain in bounds of game window
            this.x = Phaser.Math.Clamp(
                this.x, 
                borderUISize+borderPadding, 
                game.config.width-borderUISize-borderPadding);
        }
    }
}