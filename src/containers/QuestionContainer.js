import React, { Component } from 'react'
import Question from '../components/Question'
import Answer from '../components/Answer'

class QuestionContainer extends Component {
    state = {
        question: "",
        showAnswer: false
    }
    getQuestion = () => {
        if (this.state.question){
            return <Question question={this.state.question.content} key={"question"} />
        }else {
            return <h1>Click to start</h1>
        }
    }
    answer = () => {
        if (this.state.question){
            return <Answer answer={this.state.question.answer} key={"answer"} />
        }else {
            return <h1>Click to start</h1>
        }
    }


    randomQuestion = () => {
        const questions = this.props.questions
        const quest = questions[Math.floor(Math.random()*questions.length)]
        this.setState({
            question: quest, 
            showAnswer: false})
    }
    showAnswer = () => {
        this.setState({
            showAnswer: !this.state.showAnswer
        })
    }
    
    render() {
        console.log(this.props.questions)
        return (
            <div>
                <h1>Question Container</h1>
                {this.getQuestion()}
                <button onClick={this.randomQuestion}>Click me</button>
                <button onClick={this.showAnswer}>Show answer</button>
               
                {this.state.showAnswer && this.answer()}
            </div>
        )
    }
}

export default QuestionContainer
