let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake [0] = {
  x: 8 * box,
  y: 8 * box
}

let direction = "right";
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}
//
function criarBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
  for(i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}
//Abaixo Funçaõ que Cria Blocos Para Cobra Come
function drawFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
}
//

// função Abaixo vai pega o evento keydown que é o
// evento de  de Click do Teclado e vai chama o 
// parametro update que éa função que está abaixo
document.addEventListener('keydown', update);

// a função do update vai pega o click da tecla  
//selecionada para fazer o quadrado se movimenta
// exemplo se clicka a seta pra cima, ira subir
// se clicka seta pra baixo ira descer
function update (event) {
 if(event.keyCode == 37 && direction != "right")
 direction = "left";
 if(event.keyCode == 38 && direction != "down")
 direction = "up";
 if(event.keyCode == 39 && direction != "left")
 direction = "right";
 if(event.keyCode == 40 && direction != "up")
 direction = "down";
}

function iniciarJogo() {

  if(snake[0].x > 15 * box && direction == "right")
  snake[0].x = 0;

  if(snake[0].x < 0 && directon == "left") snake[0].x
  = 16 * box;

  if(snake[0].y > 15 * box && direction == "down")
  snake[0].y = 0;

  if(snake[0].y < 0 && direction == "up") snake[0].y
  = 16 * box;
  //Abaixo Criando um For Que, Quando a Snake
  // Chocarse Com o  Seu proprio corpo
  // o Jogo Vai Termina e Vai Gera um Alert
  // Dizendo que voce Game Over Reinicie o Jogo

  for(i = 1; i < snake.length; i++){
    if(snake[0].x == snake[i].x &&snake[0].y == snake[i].y)
     {
       clearInterval(jogo);
       alert('Game Over :(');
       alert('Atualize á Página Para Recomeça')
       
     }
  }

  //
  // Abaixo está Iniciando as Funçoes Criadas.
  //CriarBG, CriarCobrinha e DrawFood.
  criarBG();
  criarCobrinha();
  drawFood();

  //
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(direction == "right") snakeX += box;
  if(direction == "left") snakeX -= box;
  if(direction == "up") snakeY -= box;
  if(direction == "down") snakeY += box;

  if(snakeX != food.x || snakeY != food.y) {
    snake.pop(); 
  }else {
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
  }
  
  // essa função pop. ela retira o ultimo elemento
  // de um Array.
 

  let newHead = {
    x: snakeX,
    y: snakeY
  }
// função unshift acrescenta um elemento novo
// no inicio de um Array
  snake.unshift(newHead);
}

// variavel abaixo está setando um internalo
//de 100 milesegundos a variavel iniciaJogo
let jogo = setInterval(iniciarJogo, 100);
//