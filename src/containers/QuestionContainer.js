import React, { Component } from 'react'
import Question from '../components/Question'
class QuestionContainer extends Component {
    getQuestion = () => {
       return <Question question={this.props.questions[0]} key={"question"} />
    }
    render() {

        return (
            <div>
                <h1>Heeeeeelooooo</h1>
                {this.getQuestion()}
            </div>
        )
    }
}

export default QuestionContainer
