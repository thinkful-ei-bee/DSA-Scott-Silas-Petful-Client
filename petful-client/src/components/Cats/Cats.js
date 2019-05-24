import React, {Component} from 'react';
import './Cats.css';

export default class Cats extends Component {


  render(){

    return (
      <div className='animal-div'>
        <h2>{this.props.cats.cats && this.props.cats.cats.first.value.name}</h2>
        <img src={this.props.cats.cats && this.props.cats.cats.first.value.image} alt='animal' />
        <p><span>Sex:</span> {this.props.cats.cats && this.props.cats.cats.first.value.sex}</p>
        <p><span>Age:</span> {this.props.cats.cats && this.props.cats.cats.first.value.age}</p>
        <p><span>Breed:</span> {this.props.cats.cats && this.props.cats.cats.first.value.breed}</p>
        <p><span>Story:</span> {this.props.cats.cats && this.props.cats.cats.first.value.story}</p>

        <button onClick={this.props.adopt} className='adopt-button' disabled={!this.props.first}>
          Adopt!
        </button>
      </div>

      
    )
  }


}