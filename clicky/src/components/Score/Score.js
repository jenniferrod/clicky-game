import React from "react";
import ScoreMessage from "../ScoreMessage";
import "./Score.css";

// Component for the Score ribbon

const Score = props => (
  <div className="score">
    <ul>
      <li className="logo">
        <a href="/">Clicky Game</a>
      </li>
      <ScoreMessage score={props.score} topScore={props.topScore} />
      <li>
        Score: {props.score}   |   Top Score: {props.topScore}
      </li>
    </ul>
  </div>
);

export default Score;
