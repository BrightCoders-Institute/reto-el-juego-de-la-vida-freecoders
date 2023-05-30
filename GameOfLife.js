class GameOfLife {
  constructor(rows, cols, generations) {
    this.generations = generations;
    this.rows = rows;
    this.cols = cols;
    this.grid = new Array(rows);
    this.newGrid = new Array(rows);
    this.createMatriz();
  }

  createMatriz() {
    for (let i = 0; i < this.rows; i += 1) {
      this.grid[i] = new Array(this.cols);
      this.newGrid[i] = new Array(this.cols);
    }
  }

  iniGrid() {
    for (let i = 0; i < this.rows; i += 1) {
      for (let j = 0; j < this.cols; j += 1) {
        this.grid[i][j] = Math.floor(Math.random() * 2);
        this.newGrid[i][j] = 0;
      }
    }
    this.printGrid();
  }

  static liveOrDie(noNeighbours, status) {
    // Reglas celda viva
    if (status === 1) {
      return (noNeighbours === 2 || noNeighbours === 3) ? 1 : 0;
    }
    // Reglas celda muerta
    return (noNeighbours === 3) ? 1 : 0;
  }

  nextGen() {
    for (let i = 0; i < this.rows; i += 1) {
      for (let j = 0; j < this.cols; j += 1) {
        const count = this.neighborsCount(i, j);
        this.newGrid[i][j] = GameOfLife.liveOrDie(count, this.grid[i][j]);
      }
    }
    this.grid = this.newGrid;
    this.printGrid();
  }

  neighborsCount(posX, posY) {
    let cells = 0;
    for (let i = -1; i <= 1; i += 1) {
      for (let j = -1; j <= 1; j += 1) {
        const rowC = posX + i;
        const colC = posY + j;
        if (rowC >= 0 && colC >= 0 && rowC < this.rows && colC < this.cols) {
          cells += this.grid[rowC][colC];
        }
      }
    }
    if (this.grid[posX][posY] === 1) cells -= 1;
    return cells;
  }

  printGrid() {
    for (let i = 0; i < this.rows; i += 1) {
      let col = '';
      for (let j = 0; j < this.cols; j += 1) {
        if (this.grid[i][j] === 1) {
          col += '*';
        } else {
          col += '.';
        }
      }
      console.log(col);
    }
  }

  playGame() {
    console.log('Generación inicial');
    this.iniGrid();
    for (let i = 0; i < this.generations; i += 1) {
      console.log(`Generación ${i}`);
      this.nextGen();
    }
  }
}

module.exports = { GameOfLife };
