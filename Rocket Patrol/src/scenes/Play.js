class Play extends Phaser.Scene {
    constructor () {
        super("playScene");
    }

    preload() {
        this.load.image('starfield', 'assets/starfield.png');
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('ship', 'assets/spaceship.png');
    }

    create () {
        this.starfield = this.add.tileSprite(
            0,0,640,480,'starfield',
        ).setOrigin(0,0);

        this.p1Rocket = new Rocket(
            this, 
            game.config.width/2,
            game.config.height - borderUISize - borderPadding,
            'rocket'
            );

        this.ship1 = new Ship(
            this,
            100,
            200,
            'ship'
        );
        
        this.ship2 = new Ship(
            this,
            300,
            240,
            'ship'
        );

        this.ship3 = new Ship(
            this,
            380,
            300,
            'ship'
        );

        // green UI background
        this.add.rectangle(
            0, 
            borderUISize + borderPadding, 
            game.config.width, 
            borderUISize*2, 
            0x00FF00, 
            ).setOrigin(0,0);
        // white borders
        this.add.rectangle(
            0, 
            0, 
            game.config.width, 
            borderUISize, 
            0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(
            0, 
            game.config.height - borderUISize, 
            game.config.width, borderUISize, 
            0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(
            0, 
            0, 
            borderUISize, 
            game.config.height, 
            0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(
            game.config.width - borderUISize, 
            0, 
            borderUISize, 
            game.config.height, 
            0xFFFFFF).setOrigin(0 ,0);

        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);          
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        this.starfield.tilePositionX -= 4; // background scroll to the right

        // epic function call for epic movement
        this.p1Rocket.update();

        this.ship1.update();
        this.ship2.update();
        this.ship3.update();
    }
}