import React, {Component} from 'react';
import './thumbs.css';

export default class Thumbs extends Component {

  

  renderThumbs(){
    
    const thumbs = [];
    if(this.props.animals) {

      let animal = this.props.animals.first;
      while(animal !== null) {
        thumbs.push(animal.value.image)
        animal = animal.next;
      }
      return thumbs;
    }
  }

  render(){

    const thumbs = this.renderThumbs();

    return (
      <div className='thumbs-div'>
        {thumbs && thumbs.map(thumb => <img key={thumb} src={thumb} className='thumb' alt='rescue' />)}
      </div>

      
    )
  }


}