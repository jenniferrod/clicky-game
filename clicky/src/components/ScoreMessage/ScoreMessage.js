import React, { Component } from "react";
import "./ScoreMessage.css";

// ScoreMessage renders an li tag containing an message for the user

class ScoreMessage extends Component {
    state = {
        message: "",
        animating: false
    };

    componentWillReceiveProps({ score, topScore }) {
        const newState = { animating: true };
        if (score === 0 && topScore === 0) {
            newState.message = "";
        } else if (score === 0 && topScore > 0) {
            newState.message = "incorrect";
        } else {
            newState.message = "correct";
        }
        this.setState(newState, () =>
            setTimeout(() => this.setState({ animating: false }), 500)
        );
    }

    renderMessage = () => {
        switch (this.state.message) {
            case "correct":
                return "You guessed correctly!";
            case "incorrect":
                return "You've already clicked that one. Try Again!";
            default:
                return "Click an image to begin";
        }
    };

    render() {
        return (
            <li className={this.state.animating ? this.state.message : ""}>
                {this.renderMessage()}
            </li>
        );
    }
}

export default ScoreMessage;
