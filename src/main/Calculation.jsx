import React, { Component } from 'react'

class Calculation extends Component {
    state = {
        wpm: 0,
        time: 60
    }

    accuracyCount = () => {
        if (this.props.currentWordArray.length !== 0) {
            let res = this.props.currentWordArray.filter(ele => ele === true)
            let accuracy = (res.length / this.props.charCount) * 100
            return Math.floor(accuracy)
        }
        return 100;
    }

    render() {
        const { wpm, time } = this.state
        return (
            <div className='mb-3'>
                <div className="row text-center">
                    <div className="col-sm-4 border-right">
                        <h3>Accuracy</h3>
                        <h1>{this.accuracyCount()}%</h1>
                    </div>
                    <div className="col-sm-4 border-right">
                        <h3>Word Per Minute</h3>
                        <h1>{wpm}</h1>
                    </div>
                    <div className="col-sm-4">
                        <h3>Time</h3>
                        <h1>{time}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculation
