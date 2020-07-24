import React, { Component } from 'react'
import { paragraph } from 'txtgen'
import Word from './Word'

class Main extends Component {
    state = {
        wordArray: paragraph().split(' '),
        wordCount: 0
    }

    wordCountAdd = () => {
        this.setState({
            wordCount: this.state.wordCount + 1
        })
    }
    render() {
        const { wordArray, wordCount } = this.state;
        return (
            <React.Fragment>
                <div className='border border-primary p-3 mt-4 mb-3'>
                    {wordArray.map((word, i) => {
                        return <span key={i} className={i === wordCount ? 'text-danger font-weight-bold' : 'font-weight-bold'}>{word + ' '}</span>
                    })}
                </div>
                <Word word={wordArray[wordCount]} wordCountAdd={this.wordCountAdd} />
            </React.Fragment>

        )
    }
}

export default Main
