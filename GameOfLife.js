class GameOfLife{
  constructor(rows, cols, generations){
    this.generations = generations;
    this.rows = rows;
    this.cols = cols;
    this.grid = new Array(rows);
    this.newGrid = new Array(rows);
    this.createMatriz();
  }

  createMatriz(){
    for (let i =0; i<this.rows; i++){
      this.grid[i]= new Array(this.cols)
      this.newGrid[i] = new Array(this.cols)
    }
  }

  iniGrid(){
    for(let i=0; i<this.rows; i++){
      for(let j=0;j<this.cols; j++){
        this.grid[i][j] = Math.floor(Math.random()*2)
        this.newGrid[i][j]=0;
      }
    }
    this.printGrid();
  }

   liveOrDie(noNeighbours, status){
    //Reglas celda viva
    if (status === 1){
        return (noNeighbours ==2 || noNeighbours ==3)? 1:0;
    }
    //Reglas celda muerta
    else{
        return (noNeighbours===3)?1:0;
    }
  }

   nextGen(){
    for(let i = 0; i<this.rows; i++){
      for(let j=0; j<this.cols; j++){
        const count = this.neighborsCount(i,j)
        this.newGrid[i][j]= this.liveOrDie(count, this.grid[i][j]);
      }
    }
    this.grid = this.newGrid;
    this.printGrid();
  }

   neighborsCount(posX,posY){
    let cells = 0;
    for (let i = -1; i <= 1; i++){
      for (let j = -1; j <= 1; j++){
        if(i==0 && j==0) continue;
        let rowC = posX + i;
        let colC = posY + j;
        if (rowC >= 0 && colC >= 0 && rowC < this.rows && colC < this.cols){
          cells+= this.grid[rowC][colC];
        }
      }
    }
    return cells;
  }
  
   printGrid(){
    for(let i = 0; i<this.rows; i++){
      let col = '';
      for (let j = 0; j<this.cols; j++){
        if (this.grid[i][j] == 1){
          col+='*';
        }
        else{
          col+='.';
        }
      }
      console.log(col);
    }
  }

  playGame(){
    this.iniGrid();
    for (let i = 0; i<this.generations; i++ ){
      console.log(`Generación ${i}`);
      this.nextGen();
    }
    
  }
}

module.exports = {GameOfLife};