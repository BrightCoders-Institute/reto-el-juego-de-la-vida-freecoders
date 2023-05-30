// const gameoflife= require('./gameoflife.js');
// import GameOfLife from './GameOfLife.js';
const {GameOfLife} = require("./GameOfLife.js");
const game = new GameOfLife(4,8,3);

game.playGame();

