import React, { Component } from 'react'
import TextField from './TextField'


class Word extends Component {
    state = {
        wordArray: this.props.word.split(''),
        wordIndex: 0
    }
    render() {
        return (
            <div>
                <TextField word={this.state.wordArray} index={this.state.wordIndex} wordCountAdd={this.props.wordCountAdd} />
            </div>
        )
    }
}

export default Word
