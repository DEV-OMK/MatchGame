import './index.css'

const GameOverItem = props => {
  const {score, resetGame} = props

  const onClickReset = () => {
    resetGame()
  }

  return (
    <div className="game-over-card">
      <div className="trophy-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-image"
        />
      </div>
      <p className="score-text">YOUR SCORE</p>
      <p className="final-score">{score}</p>
      <button type="button" className="reset-button" onClick={onClickReset}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-image"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameOverItem
