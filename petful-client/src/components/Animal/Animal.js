import React, {Component} from 'react';
import './Animal.css';

export default class Animal extends Component {

  render(){
    console.log('ANIMAL STATE: ', this.props.cats)
    return (
      <div className='animal-div'>
        <img src={this.props.cats.cats && this.props.cats.cats.first.value.image} alt='animal' />
      </div>
    )
  }


}