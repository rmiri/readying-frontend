import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import QuestionContainer from './QuestionContainer';
import API from '../API';


class Page extends Component {
    state = {
        questions: []
    }

    getQuestions = () => {
        API.getQustions()
        .then(questions => this.setState({
            questions
        })) 
        .catch(function(error){
            alert("it seems something went wrong, come back later", error)
        })
    }
    componentDidMount(){
        this.getQuestions()
    }



    render() {
        return (
            <div>
                <NavBar />
                <QuestionContainer questions={this.state.questions}/>
            </div>
        )
    }
}

export default Page
