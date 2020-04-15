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
            return <Question question={this.state.question.content} info={this.state.question.info} key={"question"} />
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
       
        return (
            <div className="w-full h-full">
             
                <div className="bg-white w-full h-40 rounded-lg shadow-md"> 
                    {this.getQuestion()}
                </div>
                    <button 
                        onClick={this.randomQuestion}
                        className="mt-5 btn bg-white text-gray-600 font-sans py-2 px-16 rounded border border-b-4 border-gray-500 hover:border-t-2 hover:border-gray-600 hover:bg-gray-200"
                    >Question</button>
                    <button 
                        onClick={this.showAnswer}
                        className="mt-5 btn text-white font-sans py-2 px-12 ml-32 rounded  border border-gray-200 hoover:border-gray-400 hover:text-gray-200 hover:shadow"
                    >Show answer</button>
                <div className="h-10">
                    {this.state.showAnswer && this.answer()}
                </div>
            </div>
        )
    }
}

export default QuestionContainer
