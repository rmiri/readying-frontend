import React, { Component } from 'react'
import Question from '../components/Question'
import Answer from '../components/Answer'

class QuestionContainer extends Component {
    state = {
        question: "",
        showAnswer: false
    }
    getQuestion = () => {
       
        return <Question question={this.state.question.content} info={this.state.question.info} key={"question"} />
     
    }
    answer = () => {
        return <Answer answer={this.state.question.answer} key={"answer"} />
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
       
        return (
            <div className="w-full h-full">
             
                <div className=""> 
                    {this.getQuestion()}
                </div>
                    <button 
                        onClick={this.randomQuestion}
                        className="focus:outline-none mt-5 btn bg-white text-gray-600 font-sans py-2 px-16 rounded border hover:bg-gray-200"
                    >Question</button>
                    <button 
                        onClick={this.showAnswer}
                        className="focus:outline-none mt-5 btn text-white font-sans py-2 px-12 ml-32 rounded  border border-gray-200 hoover:border-gray-400 hover:text-gray-200 hover:shadow"
                    >Show answer</button>
                <div className="h-10">
                    {this.state.showAnswer && this.answer()}
                </div>
            </div>
        )
    }
}

export default QuestionContainer
