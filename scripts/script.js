window.addEventListener('DOMContentLoaded', () => {
    
    // const resetBtn = document.querySelector('.btn');
// // const scoreBoard = document.querySelector('.scoreboard');
// let boxes = Array.from(document.querySelectorAll('.box'));
// let emptySpaces = Array(9).fill('');
// const PlayerTurn = document.querySelector('.playerTurn'); 

// const player_x = "X";
// const player_o = "O";
// let currentPlayer =  player_x;

// // const PLAYERXWIN = 'Player X won';
// // const PLAYEROWIN = 'Player O won';
// // const draw = 'draw';
// // let score = document.querySelectorAll('.score');
// const winner = document.querySelector('#winner');

// let board = ['', '', '', '', '', '', '', '', ''];
    
    
    // notes
    ///use arrow functions
    ///
    
    
    
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const win = document.querySelector('.win');
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;
    const x_win = 'player X won';
    const o_win = 'player O won';
    const TIE = 'TIE';

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    ///old winning function

    // function playerWon(){  
    //     for (const condition of winningConditions) {
    //             let [a, b, c] = condition
        
    //             if (board[a] && (board [a] === board[b] && borad[b] === board[c])){
                    
    //                 return [a, b, c]
                    
    //             }
    //         }
    //         return false 
    //     }

    function gameWon() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            winner(currentPlayer === 'X' ? x_win : o_win);
            isGameActive = false;
            return;
        }
        if (!board.includes (''))
        winner(TIE)
    
// if (board != (''))
    //     winner(TIE);
    } 




    ////// game does not finish

    // function clicked(event) {
    //     const id = event.target.id
    
    //     if(emptySpaces[id] == ''){
    //         emptySpaces[id] = currentPlayer;
    //         event.target.innerText = currentPlayer;
    //         PlayerTurn.innerHTML = currentPlayerTurn();
           
    //         if (currentPlayer === player_x){
    //             currentPlayer = player_o;
    //         } else {
    //             currentPlayer = player_x;
    //         }
    //         PlayerTurn.innerText = currentPlayerTurn();
    
    //         if (playerWon() !== false) {
    //             gameActive = false;
    //             winner.innerText = `Player ${currentPlayer} has won!`
    //             return;
    //         } 
    //     }
////////////////


    ///winner annoucment was not showing correctly 
    //// (switch) to annouce winner still learning it 

    const winner = (type) => {
        switch(type){
            case o_win:
                win.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case x_win:
                win.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                win.innerText = 'Tie';
        }
        win.classList.remove('hide');
    };

    const tileEmpty = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };

    const updateBoard =  (index) => {
        board[index] = currentPlayer;
    }






    // player change

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

playerTurn.textContent = `it's ${turn} turn`




    const tileClick = (tile, index) => {
        if(tileEmpty(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            gameWon();
            changePlayer();
        }
    }
    

    //////game resets but can't playe again 
    // resetBtn.addEventListener('click', reset)

    // function reset (){
    //     board = ['', '', '', '', '', '', '', '', ''];
    //     board.fill('')
    
    //     tiles.forEach(tile => {
    //         tile.innerText = ''
    //     })
    //     winner.innerText = ""
    //     currentPlayer = player_x
    //     PlayerTurn.innerHTML = currentPlayerTurn();
    //     gameActive = true
    // }; 
    

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        win.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => tileClick(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});