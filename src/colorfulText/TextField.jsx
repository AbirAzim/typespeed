import React, { Component } from 'react'

class TextField extends Component {

    state = {
        count: 60,
        wordPerMinute: 0
    }

    onKeyPressHandler = (e) => {
        this.props.pushToCurrentArray(e.key)
        this.props.currentCharAdd()
    }

    keyDownHandler = (e) => {
        if (e.keyCode === 8) {
            this.props.popFromCurrentArray()
        }

        if (e.keyCode === 9 || e.keyCode === 13 || e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) {
            e.preventDefault();
        }
    }

    accuracyCount = () => {

        if (this.props.correcCharCheckArray.length !== 0) {
            let result = this.props.correcCharCheckArray.filter(bol => bol === true)
            let accuracy = (result.length / this.props.correcCharCheckArray.length) * 100;
            return accuracy.toFixed(2)
        }
        return 100.00.toFixed(2)

    }

    changeCounterTime = () => {
        var counter = setInterval(() => {
            let count = this.state.count - 1;
            if (count === -1) {
                clearInterval(counter);
                return;
            }

            var seconds = count % 60;
            // var minutes = Math.floor(count / 60);
            // var hours = Math.floor(minutes / 60);
            // minutes %= 60;
            // hours %= 60;
            let tempArray = this.props.charArray.filter((ele, i) => i < this.props.correcCharCheckArray.length)
            let temp = tempArray.filter(space => space === ' ')
            console.log(temp)
            console.log(seconds);
            let wpm = (temp.length / (60 - seconds)) * 60
            console.log(wpm);
            this.setState({
                count: seconds,
                wordPerMinute: Math.floor(wpm)
            })
        }, 1000); //1000 will  run it every 1 second
    }

    getStyle = () => {
        if (this.state.count === 0) {
            return { resize: 'none' }
        }
        return {}
    }

    render() {
        return (
            <div className='mt-4'>
                <div className="row text-center font-weight-bold">
                    <div className="col-sm-4 border-right">
                        <h3 className='text-seconday'>Accuracy</h3>
                        <h1 className='text-seconday'>{this.accuracyCount()}%</h1>
                    </div>
                    <div className='col-sm-4 border-right'>
                        <h3 className='text-success'>WPM</h3>
                        <h1 className='text-success'>{this.state.wordPerMinute}</h1>
                    </div>
                    <div className='col-sm-4'>
                        <h3 className='text-danger'>Time Left</h3>
                        <h1 className='text-danger'>{this.state.count}<small>s</small></h1>
                    </div>
                </div>
                <form action="" className='mt-4'>
                    {this.state.count !== 0 ? <textarea onFocus={this.changeCounterTime} onKeyDown={this.keyDownHandler} onKeyPress={this.onKeyPressHandler} placeholder='Type Here...' name="" id="" cols="30" rows="5" className='form-control' style={this.getStyle()}></textarea> : ''}
                </form>
            </div>
        )
    }
}

export default TextField
