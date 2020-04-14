import React from 'react'

const Answer = (props) => {
    const answer = props.answer ? props.answer : "Loading..."
    return (
        <div>
            <h1>{answer}</h1>
        </div>
    )
}

export default Answer;