import React from 'react'

const Answer = (props) => {
    const answer = props.answer ? props.answer : 'Press "Question" to start'
    return (
        <div className="w-full bg-white rounded-lg shadow-md p-8 mt-5">
            <p className="text-gray-700">{answer}</p>
        </div>
    )
}

export default Answer;