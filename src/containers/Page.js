import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import QuestionContainer from './QuestionContainer';
import API from '../API';


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
            <div>
                <NavBar />
                <div>
                    <label>Select Category</label>
                    <select
                        name='category'
                        onChange={this.filterCategory}
                    >
                        <option value='null' disabled selected>Category</option>
                        <option value='cultural'>Cultural</option>
                        <option value='trivia'>Trivia</option>
                        <option value='coding'>Coding</option>
                    </select>
                </div>
                {isLanguageVisible && category !== 'cultural' ?                 <div>
                    <label>Select Language</label>
                    <select
                        name='language'
                        onChange={this.filterCategory}
                    >
                        <option value='null' disabled selected>Language</option>
                        <option value='javascript'>Java Script</option>
                        <option value='ruby'>Ruby</option>
                        <option value='react'>React</option>
                    </select>
                </div> 
                :
                null
                }

                <QuestionContainer questions={filteredQuestions ? filteredQuestions : questions}/>
            </div>
        )
    }
}

export default Page
