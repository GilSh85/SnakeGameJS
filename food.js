import { onSnake, expandSnake } from './snakePhysics.js'
import { randomGridPosition } from './gameGrid.js'

let food = getRandomFoodPosition();
const snakeGrowth = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(snakeGrowth);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}