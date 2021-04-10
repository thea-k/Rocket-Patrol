class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.MovementSpeed = 2;
    }

    update() {
        if(keyLeft.isDown) {
            this.x -= this.MovementSpeed;
        }
        if(keyRight.isDown) {
            this.x += this.MovementSpeed;
        }
    }
}