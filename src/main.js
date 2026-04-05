// CMPM 170 Sprint 1

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    /*render: {
        pixelArt: true
    },*/
    /*physics: {
        default: 'arcade',
        arcade: {
            gravity: { 
                x: 0,
                y: 500 
            },
            debug: true
        }
    },*/
    scene: [ Play]
}

let game = new Phaser.Game(config)
