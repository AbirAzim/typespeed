import React, { Component } from 'react'

class ResultMeter extends Component {

    accuracyCount = () => {
        // const { correcCharCheckArray } = this.props

        if (this.props.correcCharCheckArray.length !== 0) {
            let result = this.props.correcCharCheckArray.filter(bol => bol === true)
            let accuracy = (result.length / this.props.correcCharCheckArray.length) * 100;
            return accuracy.toFixed(2)
        }
        return 100.00.toFixed(2)

    }

    render() {
        // const { wordPerMinute, count } = this.props
        return (
            <div className='mt-4'>
                <div className="row text-center font-weight-bold">
                    <div className="col-sm-4 border-right">
                        <h3 className='text-seconday'>Accuracy</h3>
                        <h1 className='text-seconday'>{this.accuracyCount()}%</h1>
                    </div>
                    <div className='col-sm-4 border-right'>
                        <h3 className='text-success'>WPM</h3>
                        <h1 className='text-success'>{this.props.wordPerMinute}</h1>
                    </div>
                    <div className='col-sm-4'>
                        <h3 className='text-danger'>Time Left</h3>
                        <h1 className='text-danger'>{this.props.count}<small>s</small></h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultMeter
