import React, { Component } from 'react'

class TextField extends Component {

    onKeyPressHandler = (e) => {
        // const { pushToCurrentArray, currentCharAdd } = this.props
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

    render() {
        return (
            <div>
                <form action="" className='mt-4'>
                    {this.props.count !== 0 ? <textarea onFocus={this.props.onFocus} onKeyDown={this.keyDownHandler} onKeyPress={this.onKeyPressHandler} placeholder='Type Here...' name="" id="" cols="30" rows="5" className='form-control'></textarea> : ''}
                </form>
            </div>
        )
    }
}

export default TextField
