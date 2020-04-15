import React from 'react'
import { Link } from "react-router-dom"
import background from '../images/back-about.png'

const About = () => {
    return (
       <div className="h-screen w-screen bg-fixed flex" style={{ backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat' }}>
            <div className="w-1/2 h-full pt-10 pl-20">
                <img src='./images/girl-about.png'/>
            </div>
            <div className="w-1/2 h-full pt-10">
                <h1 className='readyingH1 text-4xl text-orange-500 font-bold'>About Readying</h1>
                <div className="w-3/4 pt-5">
                    <p className="text-gray-700">
                        Finding a job is not easy and looking for a job can loo like work itself, filling applications and writing cover letters can be extremely daunting, and at the same time you should also be preparing yourself to when you finally face your prospective boss.
                    <br/>
                        So I decided to make the process a little easier, and provide you with some pre-made questions for you to practice.
                    <br/>
                        A tip would be to either record yourself or answer them in front of a mirror, like actors do when preparing for a part, or you can ask a friend to help you.
                    <br/><br/>
                        The questions where take form these sources:
                    </p>
                </div>
            </div>
       </div>
    )
}

export default About;