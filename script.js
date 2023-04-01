'use strict';

const snake = document.querySelector('.snake');
const food = document.querySelector('.food');
const scoreDisplay = document.querySelector('.score');
const fieldElement = document.querySelector('.field');

let xORy = '';
let addSubs;
//Initial position
let snakePosition = {
  x: 0,
  y: 0,
};
let foodPosition = {
  x: 50,
  y: 50,
};
let score = 0;
let transform = '';
let foodTranslation = '';
let gameSTART = 0;

//addEvent Arrows
addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp') {
    xORy = 'y';
    addSubs = -50;
    // snakePosition[xORy] += addSubs
    checker();
  }
  if (e.key === 'ArrowDown') {
    xORy = 'y';
    addSubs = 50;
    // snakePosition[xORy] += addSubs;
    checker();
  }
  if (e.key === 'ArrowLeft') {
    xORy = 'x';
    addSubs = -50;
    // snakePosition[xORy] += addSubs;
    checker();
  }
  if (e.key === 'ArrowRight') {
    xORy = 'x';
    addSubs = 50;
    // snakePosition[xORy] += addSubs;
    checker();
  }
  updatePosition();

  // ---- MENU INTERVAL START -----
  if (gameSTART === 0) {
    foodInterval();
    setInterval(foodInterval, 5000);
    gameSTART = 1;
  }
  // console.log(cubePosition, transform, xORy);
});

function checker() {
  //check if x
  function xcheck() {
    if (snakePosition.x > 450) {
      snakePosition.x = 0;
    }
    if (snakePosition.x < 0) {
      snakePosition.x = 450;
    }
  }
  //check if y
  function ycheck() {
    if (snakePosition.y > 450) {
      snakePosition.y = 0;
    }
    if (snakePosition.y < 0) {
      snakePosition.y = 450;
    }
  }

  xcheck();
  ycheck();
}

//update-position
function updatePosition() {
  transform = `translate(${snakePosition.x},${snakePosition.y})`;
  snake.setAttribute('transform', transform);
}

// ~~~~ AUTO-MOVING SNAKE ~~~~
const snakeInterval = setInterval(move, 200);

function move() {
  snakePosition[xORy] += addSubs;
  checker();
  updatePosition();
  foodEaten();
}
// ____ MENU ____
const menu = ['🍎', '🍐', '🍓', '🍉', '🌶', '🥕', '🍑', '🥥', '🥑', '🥔'];

function foodInterval() {
  //Generate coordinates
  foodPosition.x = Math.trunc(10 * Math.random()) * 50;
  foodPosition.y = Math.trunc(10 * Math.random()) * 50;
  foodTranslation = `translate(${foodPosition.x}px, ${foodPosition.y}px)`;

  //Add coordinates to food current position
  food.innerHTML = menu[Math.trunc(10 * Math.random())];
  food.style.setProperty('transform', foodTranslation);

  food.classList.remove('hidden');
}

//Did the snake manage to catch the food?
function foodEaten() {
  if (
    snakePosition.x === foodPosition.x &&
    snakePosition.y === foodPosition.y
  ) {
    food.classList.add('hidden');
    foodInterval();
    clearInterval(foodInterval);
    console.log(snakePosition, foodPosition);
    score++;
    scoreDisplay.textContent = `${score}`.padStart(5, 0);
  }
}

function createBody() {
  fieldElement.insertAdjacentHTML(
    'afterbegin',
    '<svg class="snake snake-body" transform="translate(0,50)"></svg>'
  );
}

createBody();
