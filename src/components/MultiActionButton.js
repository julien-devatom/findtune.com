import React, { Component } from 'react'

import FloatingButtons from 'react-floating-buttons'

import icon1 from  './gallery.svg'
import icon2 from  './music.svg'
import icon3 from  './guitar.svg'
import icon4 from  './friends.svg'


export class MultiActionButton extends Component {

  buttonsList = [
    { onClick: ()=> alert('clicked icon1'), src: icon1 },
    { onClick: ()=> alert('clicked icon2'), src: icon2 },
    { onClick: ()=> alert('clicked icon3'), src: icon3 },
    { onClick: ()=> alert('clicked icon4'), src: icon4 },
  ]

  render() {
    return <FloatingButtons buttonType='plus' degree={360} dimension={50} buttonsList={this.buttonsList}  top={'calc(50% - 25px)'} left={'5%'} direction="circular" />
  }
}

export default MultiActionButton;