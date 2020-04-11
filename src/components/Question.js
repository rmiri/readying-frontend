import React from 'react'

const Question = (props) => {
    const question = props.question ? props.question : "Loading..."
    console.log(question)
    return (
        <div>
            <h1>{question.content}</h1>
        </div>
    )
}

export default Question;