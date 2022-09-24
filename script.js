'use strict';

const snake = document.querySelector('.snake');
let xORy = '';
let addSubs;
//Initial position
let cubePosition = {
  x: 0,
  y: 0,
};
let transform = '';
let zero = 0;

//addEvent Arrows
addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp') {
    xORy = 'y';
    addSubs = -50;
    cubePosition[xORy] += addSubs;
    checker();
  }
  if (e.key === 'ArrowDown') {
    xORy = 'y';
    addSubs = 50;
    cubePosition[xORy] += addSubs;
    checker();
  }
  if (e.key === 'ArrowLeft') {
    xORy = 'x';
    addSubs = -50;
    cubePosition[xORy] += addSubs;
    checker();
  }
  if (e.key === 'ArrowRight') {
    xORy = 'x';
    addSubs = 50;
    cubePosition[xORy] += addSubs;
    checker();
  }
  updatePosition();
  console.log(cubePosition, transform, xORy);
});

function checker() {
  //check if x
  function xcheck() {
    if (cubePosition.x > 450) {
      cubePosition.x = 0;
    }
    if (cubePosition.x < 0) {
      cubePosition.x = 450;
    }
  }
  //check if y
  function ycheck() {
    if (cubePosition.y > 450) {
      cubePosition.y = 0;
    }
    if (cubePosition.y < 0) {
      cubePosition.y = 450;
    }
  }
  xcheck();
  ycheck();
}

//update-position
function updatePosition() {
  transform = `translate(${cubePosition.x},${cubePosition.y})`;
  snake.setAttribute('transform', transform);
}

const moving = setInterval(move, 1000);

function move() {
  cubePosition[xORy] += addSubs;
  checker();
  updatePosition();
}
