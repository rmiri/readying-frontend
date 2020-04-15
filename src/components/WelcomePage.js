import React from 'react'
import background from '../images/background.png'
import { Link } from "react-router-dom"

const WelcomePage = () => {
    return (
        <div className="h-screen grid grid-cols-2 grid-rows-2" style={{ backgroundImage:`url(${background})` }}>
            <img src="images/welcome.png" className="max-w-xl row-span-3 pl-32 pt-5" alt="two people, one interviewing the other"></img>
            {/*"max-w-full max-h-full sm:w-100 md:w-100 w-1/3   ml-20 mt-5}"*/}
            <div className=" row-start-2 row-span-2 col-end-3 pl-24 pt-0">
                <h1 className=" readyingH1 text-4xl text-white font-bold">READYING</h1>
                <p className="text-white font-sans ">Where you can practice 
                    interview questions
                    <b>
                        <div className="">
                            in JavaScript, Ruby on Rails, React, about you<br />
                            {/* in Ruby<br />
                            about you */}
                        </div>
                    </b>
                </p>
                <Link to="/questions">
                    <button className="mt-5 btn bg-white text-gray-600 font-sans py-2 px-16 rounded  border-b-4 border-gray-500 hover:border-t-2 hover:border-gray-600 hover:shadow">
                        Start
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default WelcomePage;
