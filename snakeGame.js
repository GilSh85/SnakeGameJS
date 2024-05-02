import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from './snakePhysics.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './gameGrid.js'

const gridSize = 22;
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
  if (gameOver) {
    if (confirm('Game Over. Press ok to restart.')) {
      window.location = '/';
    }
    return;
  }


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 500;
  if (secondsSinceLastRender < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;

  updateGame();
  renderGame();
}

window.requestAnimationFrame(main);

function updateGame() {
  updateSnake();
  updateFood();
  checkDeath();
}

function renderGame() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}