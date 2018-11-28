import React, { Component } from 'react';
import './FlagGame.css';
import FlagQuestion from './FlagQuestion'
var shuffle = require('shuffle-array');

const QuestionStates = {
    QUESTION: 1,
    ANSWER_WRONG: 2,
    ANSWER_CORRECT: 3
  };

class FlagGame extends Component{
    constructor(props){
        super(props);
        this.state={
            countries: [],
            options: [],
            correctOption: undefined,
            questionState: undefined
        }
        this.onGuess = this.onGuess.bind(this);
        this.onNext = this.onNext.bind(this);
    }
    componentDidMount(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(resp=> resp.json())
        .then(countries=> {
            const correctOption = Math.floor(Math.random()* countries.length);
            const options = this._getOptions(correctOption, countries);
            this.setState({
                countries,
                options, 
                correctOption,
                questionState: QuestionStates.QUESTION                
            })            
        })
        .catch(console.warn)
    }
    onNext(){
        const {countries} = this.state;
        const correctOption = Math.floor(Math.random() * countries.length);
        const options = this._getOptions(correctOption, countries);
        this.setState({
          correctOption,
          options,
          questionState: QuestionStates.QUESTION
        });
    }
    onGuess(answer) {
        const {correctOption} = this.state;
        let questionState = answer === correctOption ?
                            QuestionStates.ANSWER_CORRECT :
                            QuestionStates.ANSWER_WRONG;
        this.setState({questionState});
      }
    
    _getOptions(correctOption, countries){
        const options = [correctOption];
        let tries = 0;
        while(options.length<4 && tries <15){
            const option = Math.floor(Math.random()* countries.length);
            if (options.indexOf(option) === -1){
                options.push(option);
            }
            else{
                tries ++;
            }
        }        
        return shuffle(options);
    }
    render(){
        let {countries, options, correctOption, questionState}= this.state;
        let output = <div>Loading...</div>;
        if (correctOption!== undefined){
            const {flag, name}= countries[correctOption];
            let opts = options.map(opt => {
                return {
                  id: opt,
                  name: countries[opt].name
                };
            });
            output =(
                <FlagQuestion
                    answerText={name}
                    options={opts}
                    questionState = {questionState}
                    flag={flag}
                    onGuess ={this.onGuess}
                    onNext = {this.onNext}
                />
            )
        }
        return(
        <div className="FlagGame">
            {output}            
        </div>)
    }

}

export default FlagGame;
export { QuestionStates };
