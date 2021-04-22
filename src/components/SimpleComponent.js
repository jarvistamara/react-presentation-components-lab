// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
   constructor(props) {
       super(props)
       this.state = {mood: 'happy'}
       this.handleClick = this.handleClick.bind(this)
   }

    handleClick() {
        console.log('Mood was Clicked')
        this.setState ({mood: 'sad'})
    }


    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}
