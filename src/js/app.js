class GameBoard {
  constructor(boardSize) {
    this.boardSize = boardSize;
  }

  createBoard() {
    const board = document.getElementById('board');
    for (let i = 0; i < this.boardSize; i += 1) {
      const itemBoard = document.createElement('div');
      itemBoard.className = 'hole';
      board.appendChild(itemBoard);
    }

    this.randomImg();
  }

  randomImg() {
    let last;
    const hole = document.getElementsByClassName('hole');
    const img = '<img src="./img/goblin.png">';

    setInterval(() => {
      let index = Math.floor(Math.random() * (this.boardSize + 1));

      if (index === last) {
        index += 1;
        if (index > this.boardSize - 1) {
          index = 0;
        }
      }

      hole.item(index).innerHTML = img;
      hole.item(last).innerHTML = ' ';
      // onsole.log(last);
      last = index;
    }, 1000);
  }
}

const newBoard = new GameBoard(4 * 4);
newBoard.createBoard();
