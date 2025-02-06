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
        mode: Phaser.Scale.RESIZE, //redimensiona a tela
        autoCenter: Phaser.Scale.CENTER_BOTH, //centraliza a tela
    },
};

//variaveis do projeto
var game = new Phaser.Game(config);
var Logo;
var Sushi;
var Musica;
var Mar;

//funcition that preloads the visual elements of the text
function preload() {
    this.load.audio("musica", "assets/babyshark.mp3"); //pre load musica de fundo
    this.load.image("mar", "assets/bg/bg_azul-claro.jpg"); //preload do background
    this.load.image("sushi", "assets/peixes/tubarao.png"); //preload do peixe
    this.load.image("logo", "assets/bg/logo.svg"); //o branco ficou ruim.
}

//function that adds the elements into the game
function create() {
    // Create a tile sprite for the background that repeats to cover the entire screen
    Mar = this.add.tileSprite(
        0,
        0,
        window.innerWidth,
        window.innerHeight,
        "mar"
    );
    Mar.setOrigin(0, 0);
    Mar.setTint(0xaaaaaa);

    //cria a variavel Logo e seta ela como a imagem na esq inferior do bg
    Logo = this.add.image(
        window.innerWidth - 100,
        window.innerHeight - 550,
        "logo"
    ); //quis fazer de forma diferente do tutorial
    Logo.setScale(0.15); //achei muito grande o logo.

    //peixe
    Sushi = this.add.image(400, 300, "sushi");
    Sushi.setScale(0.5); //tava muito grande
    //musica
    Musica = this.sound.add("musica"); //add audio
    Musica.play({ loop: true }); //da play em loop
}

function update() {
    Sushi.x = this.input.x;
    Sushi.y = this.input.y;
}
//Yuri Boczar - GitHub: B0czar

//notas para mim: preciso colocar essa margem preta que tem em volta da barrinha de som no logo para ficar mais legivel.
