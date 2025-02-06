// Configuração do Phaser
var config = {
    type: Phaser.AUTO, // Tipo de renderização (AUTO escolhe automaticamente entre WebGL e Canvas)
    width: window.innerWidth, // Largura do jogo igual à largura da janela
    height: window.innerHeight, // Altura do jogo igual à altura da janela
    parent: "game-container", // ID do elemento HTML onde o jogo será inserido
    scene: {
        preload: preload, // Função para carregar os recursos do jogo
        create: create, // Função para criar os elementos do jogo
        update: update, // Função para atualizar o jogo a cada frame
    },
    scale: {
        mode: Phaser.Scale.RESIZE, // Redimensiona o jogo automaticamente
        autoCenter: Phaser.Scale.CENTER_BOTH, // Centraliza o jogo automaticamente
    },
};

// Criação do objeto Phaser.Game com a configuração definida
var game = new Phaser.Game(config);

// Declaração das variáveis que serão usadas no jogo
var Sushi;
var Musica;
var Mar;

// Função para carregar os recursos do jogo
function preload() {
    this.load.audio("musica", "assets/babyshark.mp3"); // Carrega o arquivo de áudio
    this.load.image("mar", "assets/bg/bg_azul-claro.jpg"); // Carrega a imagem de fundo
    this.load.image("sushi", "assets/peixes/tubarao.png"); // Carrega a imagem do sushi (tubarão)
}

// Função para criar os elementos do jogo
function create() {
    // Adiciona a imagem de fundo como um tile sprite
    Mar = this.add.tileSprite(
        0,
        0,
        window.innerWidth,
        window.innerHeight,
        "mar"
    );
    Mar.setOrigin(0, 0); // Define a origem da imagem no canto superior esquerdo
    Mar.setTint(0xaaaaaa); // Aplica uma cor de tonalidade à imagem

    // Adiciona a imagem do sushi (tubarão)
    Sushi = this.add.image(400, 300, "sushi");
    Sushi.setScale(0.5); // Redimensiona a imagem do sushi

    // Adiciona e toca a música em loop
    Musica = this.sound.add("musica");
    Musica.play({ loop: true });
}

// Função para atualizar o jogo a cada frame
function update() {
    // Atualiza a posição do sushi para seguir o cursor do mouse
    Sushi.x = this.input.x;
    Sushi.y = this.input.y;
}
