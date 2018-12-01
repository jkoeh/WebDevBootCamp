import React, { Component } from 'react';
import './FlagQuestion.css';
import FlagChoice from './FlagChoice'
import {QuestionStates} from  './FlagGame'
class FlagQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userChoice: undefined
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            userChoice: Number(e.target.value)
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onGuess(this.state.userChoice);
    }
    render() {
        const {
            flag,
            questionState,
            options,
            answerText,
            onNext
        } = this.props;
        let output = questionState === QuestionStates.QUESTION ?
            (<FlagChoice handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                options={options} />) :
            (<FlagAnswer
                correct={questionState === QuestionStates.ANSWER_CORRECT}
                answer={answerText}
                onNext={onNext}
                />);
        return (
            <div className="FlagQuestion">
               {output}
                <img src={flag} />
            </div>
        )
    }
}
export default FlagQuestion;
const FlagAnswer = props=>{
    const {correct, answer, onNext} = props;
    let output = correct?(<h1>Correct! {answer}</h1>)
    :(<h1>Incorrect! Correct answer is {answer}</h1>);
    return(
        <div>
            {output}
            <form onSubmit={onNext}>            
                <button className="guess-button" type="submit">Next</button>
            </form>
        </div>
    )
}