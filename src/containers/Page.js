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
        var quesitonFiltered = this.setQuestionsByFilter(e.target.value)
        console.log(quesitonFiltered)
        this.setState({
            [e.target.name]: e.target.value,
            filteredQuestions: quesitonFiltered
        })
        if (e.target.value === 'trivia' || e.target.value === 'coding'){
            this.setState({
                isLanguageVisible: true,
            })
        }
        if (e.target.name === 'language'){
            // let what = quesitonFiltered//.filter( q => q.language === e.target.value)
            // this.setState({
            //     filteredQuestions: quesitonFiltered
            // })
            // console.log(what)
            // console.log(quesitonFiltered.filter(q => q.language === 'javascript'))
            
        }
       
    }

    //filter questions by category

    setQuestionsByFilter = filter => {
        return [...this.state.questions].filter( q => q.category === filter);
    }

    render() {
        
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
