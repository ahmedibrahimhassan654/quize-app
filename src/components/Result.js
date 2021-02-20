import React from 'react'

const Result = ({score,playAgain}) => {
    return (
        <div className='score-board'>
            <div className="score">
                your result is {score}/5 correct answers !
            </div>
            <button className="playBtn" onClick={playAgain}>
                play Again
            </button>
        </div>
    )
}
export default Result