import React, { Component } from 'react'
import { paragraph } from 'txtgen'
import TextField from './TextField'

class Main extends Component {
    state = {
        charArray: (paragraph() + ' ' + paragraph() + ' ' + paragraph()).split(''),
        currentChar: -1,
        currentArray: [],
        correcCharCheckArray: []
    }

    currentCharAdd = () => {
        this.setState({ currentChar: this.state.currentChar + 1 })
    }

    popFromCurrentArray = () => {
        let currentArr = this.state.currentArray
        let tempArray = this.state.correcCharCheckArray

        tempArray.pop()
        currentArr.pop();

        this.setState({
            currentArray: currentArr,
            currentChar: this.state.currentChar - 1,
            correcCharCheckArray: tempArray
        })
        console.log(this.state.currentArray);

    }

    pushToCurrentArray = (oneChar) => {
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
        if (this.state.currentArray.length === i) {
            return 'display-3'
        }
        if (this.state.currentArray[i] === char) {
            return 'text-success'
        }
        else return 'text-danger'


    }

    render() {
        return (
            <React.Fragment>
                <h1 className='text-center text-secondary font-weight-bold'>"Check Your Typing Speed On A Harder Environment"</h1>
                <div className='border border-secondary p-3 mt-3 font-weight-bold'>
                    {this.state.charArray.map((char, i) => {
                        return <span key={i} className={this.state.currentChar >= i ? this.selectClassName(char, i) : 'text-dark'}>{char}</span>
                    })}
                </div>
                <TextField charArray={this.state.charArray} correcCharCheckArray={this.state.correcCharCheckArray} popFromCurrentArray={this.popFromCurrentArray} pushToCurrentArray={this.pushToCurrentArray} currentCharAdd={this.currentCharAdd} />
                <button className='btn btn-primary mt-2 float-right' onClick={this.clickHandler}>Reload</button>
            </React.Fragment>
        )
    }
}

export default Main
