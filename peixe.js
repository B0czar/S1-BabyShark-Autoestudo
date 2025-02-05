var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};

//variaveis do projeto
var game = new Phaser.Game(config);
var Logo;
var Sushi;
var Musica;

//funcition that preloads the visual elements of the text
function preload() {
    this.load.audio("musica", "assets/babyshark.mp3"); //pre load musica de fundo

    this.load.image("mar", "assets/bg/bg_azul-claro.png"); //preload do background

    //this.load.image("mar", "assets/bg/bg_azul-escuro.png"); //

    this.load.image("sushi", "assets/peixes/tubarao.png"); //preload do peixe

    //this.load.image("logo", "assets/bg/logo-inteli_branco.png"); //preload do logo do Inteli

    this.load.image("logo", "assets/bg/logo-inteli_azul.png"); //o branco ficou ruim.

    this.load.image("yuri", "assets/bg/Yuri Boczar.png"); //preload do meu nome
}

//function that adds the elements into the game
function create() {
    this.add.image(400, 300, "mar"); //add mar nas coord 400, 300

    //cria a variavel Logo e seta ela como a imagem na esq inferior do bg
    Logo = this.add.image(100, 550, "logo"); //quis fazer de forma diferente do tutorial
    Logo.setScale(0.5); //achei muito grande o logo.

    this.add.image(250, 575, "yuri").setScale(0.3); //add meu nome do lado do logo do Inteli

    //peixe
    Sushi = this.add.image(400, 300, "sushi");
    Sushi.setOrigin(0.5, 0.5); //origem: meio da tela
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
