var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: "game-container",
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
};

var game = new Phaser.Game(config);
var Logo;
var Sushi;
var Musica;
var Mar;
var volumeControl;

function preload() {
    this.load.audio("musica", "assets/babyshark.mp3");
    this.load.image("mar", "assets/bg/bg_azul-claro.jpg");
    this.load.image("sushi", "assets/peixes/tubarao.png");
}

function create() {
    Mar = this.add.tileSprite(
        0,
        0,
        window.innerWidth,
        window.innerHeight,
        "mar"
    );
    Mar.setOrigin(0, 0);
    Mar.setTint(0xaaaaaa);

    Sushi = this.add.image(400, 300, "sushi");
    Sushi.setScale(0.5);

    Musica = this.sound.add("musica");
    Musica.play({ loop: true });

    volumeControl = document.getElementById("volumeControl");
    volumeControl.addEventListener("input", function () {
        Musica.setVolume(volumeControl.value);
    });
}

function update() {
    Sushi.x = this.input.x;
    Sushi.y = this.input.y;
}
