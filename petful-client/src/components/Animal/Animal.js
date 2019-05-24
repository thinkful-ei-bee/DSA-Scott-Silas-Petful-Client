import React, {Component} from 'react';
import './Animal.css';

export default class Animal extends Component {

  render(){

    return (
      <div className='animal-div'>
        <img href={this.props.image} alt='animal' />
        

      </div>
    )
  }


}