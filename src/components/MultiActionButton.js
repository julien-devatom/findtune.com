import React, { Component } from 'react'

import FloatingButtons from 'react-floating-buttons'

import icon1 from  './gallery.svg'
import icon2 from  './music.svg'
import icon3 from  './guitar.svg'
import icon4 from  './friends.svg'
import PostModal from "./modals/PostModal";

export class MultiActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalPost: true,
      modalBand: false,
    }

  }
  buttonsList = [
    { onClick: ()=> document.location.href="/profile", src: icon1 },
    { onClick: ()=> document.location.href="/bands", src: icon2 },
    { onClick: ()=> document.location.href="/", src: icon3 },
    { onClick: ()=> document.location.href="/artists", src: icon4 },
  ]

  render() {
    return <>
      <FloatingButtons buttonType='plus' degree={360} dimension={65} buttonsList={this.buttonsList}  top={'calc(50% - 25px)'} left={'5%'} direction="up" />
      <PostModal _open={this.state.modalPost} />
      </>

  }
}

export default MultiActionButton;
