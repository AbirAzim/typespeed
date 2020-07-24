import React, { Component } from 'react'
import Calculation from './Calculation'

class TextField extends Component {

    state = {
        myWord: this.props.word,
        index: this.props.index,
        currentWordArray: [],
        charCount: 0
    }

    keyPressHandler = (e) => {
        // if (this.state.charCount > mylen) {
        //     this.props.wordCountAdd()
        // }
        let current;
        e.key === this.state.myWord[this.state.index] ? current = [...this.state.currentWordArray, true] : current = [...this.state.currentWordArray, false]
        this.setState({
            index: this.state.index + 1,
            currentWordArray: current,
            charCount: this.state.charCount + 1
        })
    }

    keyDownHandler = (e) => {
        let mylen = this.state.currentWordArray.length;
        if (e.keyCode === 32 && this.state.charCount > mylen) {
            //console.log(this.state.currentWordArray.length)
            //console.log(this.state.charCount)
            this.props.wordCountAdd()
        }


        if (this.state.currentWordArray.length !== 0 && e.keyCode === 8) {
            let myWordArray = this.state.currentWordArray;
            myWordArray.pop();
            this.setState({
                index: this.state.index - 1,
                currentWordArray: myWordArray,
                charCount: this.state.charCount - 1
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Calculation currentWordArray={this.state.currentWordArray} charCount={this.state.charCount} />
                <div className='mt-3'>
                    <form action="" className='form'>
                        <textarea onKeyDown={this.keyDownHandler} onKeyPress={this.keyPressHandler} placeholder='Type Here...' name="" id="" cols="30" rows="5" className='form-control'></textarea>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default TextField
