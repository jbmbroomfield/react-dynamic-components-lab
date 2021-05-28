import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const props = this.props
    const opacity = props.opacity
    console.log(opacity)
    return opacity < 0.2 ? null : (
      <div className="color-box" style={{opacity: opacity}}>
        <ColorBox opacity={opacity - 0.1} />
      </div>
    )
  }

}

