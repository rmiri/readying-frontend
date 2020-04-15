import React from 'react'

const Question = (props) => {
    const question = props.question ? props.question : "Press to start"
    const info = props.info && props.info 

    console.log(props)
    return (
        <div className="w-full bg-white rounded-lg shadow-md p-8">
            <h1 className="text-lg text-gray-800">{question}
            </h1>
            <p className="mt-5 text-md text-gray-700">{info}
            </p>
        </div>
    )
}

export default Question;