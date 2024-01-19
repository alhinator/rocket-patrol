class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene")
    }

    init(){

    }

    preload(){
        // load images/tile sprites
        this.load.image('starfield', "./assets/starfield.png")
        this.load.image('rocket', './assets/rocket.png')
        this.load.image('spaceship', './assets/spaceship.png')
    }

    create(){
        //this.add.text(20, 20, "Rocket Patrol Menu")
        this.scene.start("playScene")


    }

    update(){


    }


}