import React, { Component } from 'react'

import QuestionContainer from './QuestionContainer';
import API from '../API';

import background from '../images/back-quesitons.png'



class Page extends Component {
    state = {
        questions: [],
        filteredQuestions: null,
        category:'',
        languages: [],
        language: '',
        isLanguageVisible: false
    }

    // Fetch from backend

    getQuestions = () => {
        API.getQustions()
        .then(questions => this.setState({
            questions: questions
        })) 
        .catch(function(error){
            alert("it seems something went wrong, come back later", error)
        })
    }
    componentDidMount(){
        this.getQuestions()
    }

    //Filter 

    filterCategory = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        if (e.target.value === 'cultural'){
            let quesitonFiltered = this.setQuestionsByFilter(e.target.value)
            this.setState({
                // [e.target.name]: e.target.value,
                filteredQuestions: quesitonFiltered
            })

        } else if (e.target.value === 'trivia' || e.target.value === 'coding'){
            let quesitonFiltered = this.setQuestionsByFilter(e.target.value)
            this.setState({
                isLanguageVisible: true,
                filteredQuestions: quesitonFiltered
            })
        } else {
            let quesitonFiltered = this.setQuestionsByCateg(this.state.category,e.target.value)
            this.setState({
                filteredQuestions: quesitonFiltered
            })
        }
    }

    //filter questions by category

    setQuestionsByFilter = (filter) => {
        return [...this.state.questions].filter( q => q.category === filter);
    }
    setQuestionsByCateg = (categ,language) => {
        let questions = [...this.state.questions].filter( q => q.category === categ)
        return questions.filter( q => q.language === language);
    }

    render() {
        // console.log(this.state)
        const {
            questions,
            category,
            language,
            isLanguageVisible,
            filteredQuestions
        } = this.state;

        // console.log(language)
        return (
            <div className="h-screen flex bg-fixed" style={{ backgroundImage:`url(${background})` }}>
                <div className="w-1/2 pt-20 pl-16">
                    <img src='images/girl.png' className=""/>
                    <div className="flex">
                     <div className="pt-10 w-1/3">
                        <select
                            name='category'
                            onChange={this.filterCategory}
                            className="w-full h-10 bg-white border-solid border-2 border-gray-400 focus:outline-none focus:shadow-md"
                        >
                            <option value='null' disabled selected> Select Category</option>
                            <option value='cultural'>Cultural</option>
                            <option value='trivia'>Trivia</option>
                            <option value='coding'>Coding</option>
                        </select>
                    </div>
                    {isLanguageVisible && category !== 'cultural' ?                 
                    <div className="pt-10 ml-10 w-1/3">
                        <select
                            name='language'
                            onChange={this.filterCategory}
                            className="w-full h-10 bg-white border-solid border-2 border-gray-400 focus:outline-none focus:shadow-md"
                        >
                            <option value='null' disabled selected>Select Language</option>
                            <option value='javascript'>Java Script</option>
                            <option value='ruby'>Ruby</option>
                            <option value='react'>React</option>
                        </select>
                    </div> 
                    :
                    null
                    }
                </div>
                 </div>
                <div className="w-1/2 pt-12 pr-32 pb-24">
                <QuestionContainer questions={filteredQuestions ? filteredQuestions : questions}/>
                </div>
            </div>
        )
    }
}

export default Page
