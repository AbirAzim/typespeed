import React, { Component } from 'react'
import { paragraph } from 'txtgen'
import ResultMeter from './ResultMeter'
import TextField from './TextField'

class Main extends Component {
    state = {
        charArray: (paragraph() + ' ' + paragraph() + ' ' + paragraph()).split(''),
        currentChar: -1,
        currentArray: [],
        correcCharCheckArray: [],
        count: 60,
        wordPerMinute: 0
    }

    currentCharAdd = () => {
        this.setState({ currentChar: this.state.currentChar + 1 })
    }

    popFromCurrentArray = () => {
        // const { currentArray, correcCharCheckArray, currentChar } = this.state

        let currentArr = this.state.currentArray
        let tempArray = this.state.correcCharCheckArray

        tempArray.pop()
        currentArr.pop();

        this.setState({
            currentArray: currentArr,
            currentChar: this.state.currentChar - 1,
            correcCharCheckArray: tempArray
        })

    }

    pushToCurrentArray = (oneChar) => {
        // const { charArray, currentArray, correcCharCheckArray } = this.state

        if (this.state.charArray.length < this.state.currentArray.length) {
            return
        }

        let currentArr = [...this.state.currentArray, oneChar]
        let tempArray;
        oneChar === this.state.charArray[currentArr.length - 1] ? tempArray = [...this.state.correcCharCheckArray, true] : tempArray = [...this.state.correcCharCheckArray, false]

        this.setState({
            currentArray: currentArr,
            correcCharCheckArray: tempArray
        })
    }

    clickHandler = () => {
        window.location.reload(true);
    }


    selectClassName = (char, i) => {

        // if (char == ' ') {
        //     let temp = this.state.charArray
        //     temp.splice(i, 1, '_')

        //     this.setState({
        //         charArray: temp
        //     })
        // }


        // const { currentArray } = this.state
        if (this.state.currentArray[i] === char) {
            return 'text-success'
        }
        else return 'text-danger'


    }

    changeCounterTime = () => {
        // const { charArray, correcCharCheckArray, count } = this.state
        var counter = setInterval(() => {
            const countLocal = this.state.count - 1;
            if (countLocal === -1) {
                clearInterval(counter);
                return;
            }

            var seconds = countLocal % 60;
            // var minutes = Math.floor(count / 60);
            // var hours = Math.floor(minutes / 60);
            // minutes %= 60;
            // hours %= 60;
            let tempArray = this.state.charArray.filter((ele, i) => i < this.state.correcCharCheckArray.length)
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

    render() {
        // const { charArray, currentChar, count, wordPerMinute, correcCharCheckArray } = this.state;
        return (
            <React.Fragment>
                <h1 className='text-center text-secondary font-weight-bold'>"Check Your Typing Speed On A Harder Environment"</h1>
                <ResultMeter count={this.state.count} wordPerMinute={this.state.wordPerMinute} correcCharCheckArray={this.state.correcCharCheckArray} />
                <div className='border border-secondary p-3 mt-3 font-weight-bold'>
                    {this.state.charArray.map((char, i) => {
                        return <span key={i} className={this.state.currentChar >= i ? this.selectClassName(char, i) : 'text-dark'}>{char}</span>
                    })}
                </div>
                <TextField count={this.state.count} onFocus={this.changeCounterTime} correcCharCheckArray={this.state.correcCharCheckArray} popFromCurrentArray={this.popFromCurrentArray} pushToCurrentArray={this.pushToCurrentArray} currentCharAdd={this.currentCharAdd} />
                <button className='btn btn-primary mt-2 float-right' onClick={this.clickHandler}>Reload</button>
            </React.Fragment>
        )
    }
}

export default Main
