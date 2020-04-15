import React from 'react'

const Question = (props) => {
    const question = props.question ? props.question : "Loading..."
    const info = props.info ? props.info : "Loading..."

    console.log(props)
    return (
        <div className="w-full bg-white rounded-lg shadow-md p-8">
            <h1 className="text-lg text-gray-800">{question}
            </h1>
            <p className="mt-5 text-md text-gray-700">{info}
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
        </div>
    )
}

export default Question;