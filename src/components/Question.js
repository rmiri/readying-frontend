import React from 'react'

const Question = (props) => {
    const question = props.question ? props.question : "Loading..."
 
    return (
        <div>
            <h1>{question}</h1>
        </div>
    )
}

export default Question;