import React, { Component } from "react";
import logo from './logo.png';
import img2 from './img2.png';
import img3 from './img3.png';
import ResizeImage from 'react-resize-image'

console.log(logo)
console.log(img2)
console.log(img3)

class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Galleries.</h2>
        <ResizeImage
        src={logo}
        alt="Image 1"
        options={{ width: 5 }}
        />
        <ResizeImage
        src={img2}
        alt="Image 2"
        options={{ width: 10 }}
        />
        <ResizeImage
        src={img3}
        alt="Image 3"
        options={{ width: 10 }}
        />

      </div>
    );
  }
}
 
export default Stuff;