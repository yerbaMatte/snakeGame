'use sctrict';

const cube = document.querySelector('.cube');

//Initial position
let cubePosition = {
  x: 0,
  y: 0,
};

let transform = '';

//addEvent Arrows
addEventListener('keydown', function (e) {
  if (e.key === 'ArrowUp') {
    cubePosition.y -= 50;
    ycheck();
  }
  if (e.key === 'ArrowDown') {
    cubePosition.y += 50;
    ycheck();
  }
  if (e.key === 'ArrowLeft') {
    cubePosition.x -= 50;
    xcheck();
  }
  if (e.key === 'ArrowRight') {
    cubePosition.x += 50;
    xcheck();
  }
  transform = `translate(${cubePosition.x},${cubePosition.y})`;
  cube.setAttribute('transform', transform);
  console.log(cubePosition, transform);
});

//check if x
function xcheck() {
  if (cubePosition.x > 450) {
    cubePosition.x = 0;
  }
  if (cubePosition.x < 0) {
    cubePosition.x = 450;
  }
}

function ycheck() {
  if (cubePosition.y > 450) {
    cubePosition.y = 0;
  }
  if (cubePosition.y < 0) {
    cubePosition.y = 450;
  }
}
