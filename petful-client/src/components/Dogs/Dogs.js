import React, {Component} from 'react';
import './Dogs.css';

export default class Dogs extends Component {


  render(){

    return (
      <div className='animal-div'>
        <h2>{this.props.dogs.dogs && this.props.dogs.dogs.first.value.name}</h2>
        <img src={this.props.dogs.dogs && this.props.dogs.dogs.first.value.image} alt='animal' />
        <p><span>Sex:</span> {this.props.dogs.dogs && this.props.dogs.dogs.first.value.sex}</p>
        <p><span>Age:</span> {this.props.dogs.dogs && this.props.dogs.dogs.first.value.age}</p>
        <p><span>Breed:</span> {this.props.dogs.dogs && this.props.dogs.dogs.first.value.breed}</p>
        <p><span>Story:</span> {this.props.dogs.dogs && this.props.dogs.dogs.first.value.story}</p>

        <button onClick={this.props.adopt} className='adopt-button' disabled={!this.props.first}>
          Adopt!
        </button>
      </div>

      
    )
  }


}