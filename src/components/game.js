import TicTacToe from "./tic-tac-toe"

function Game(){
      return (
        <div className="game">
          <div className="header">
            <div className="docs">Docs</div>
            <div className="play">Play</div>
            <div className="about-us">About Us</div>
          </div>
          <div className="body">
            <div className="player-1">
              <div className="player">Player 1</div>
              <div className="score">SCORE</div>
              <div className="score-value">0</div>
            </div>
            <TicTacToe/>
            <div className="player-2">
              <div className="player">Player 2</div>
              <div className="score">SCORE</div>
              <div className="score-value">0</div>
            </div>
          </div>
          <div className="footer">New Game</div>
        </div>
      );
}

export default Game;