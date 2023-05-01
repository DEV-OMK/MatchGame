import './index.css'

const Navbar = props => {
  const {timer, score} = props

  return (
    <nav>
      <ul className="bg-navbar">
        <li className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />
        </li>
        <li className="timer-score-container">
          <p className="score">
            Score: <span>{score}</span>
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="time-left">{timer} Sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
