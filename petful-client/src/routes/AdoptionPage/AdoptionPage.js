import React, { Component } from 'react';
import Animal from '../../components/Animal/Animal'
import './AdoptionPage.css';
import ApiService from '../../api-service';

export default class AdoptionPage extends Component {

  constructor(props){
    super(props);
    this.state= {
      cats: [],
      dogs: [],
    }
  }

  componentDidMount() {
    ApiService.getCats()
      .then(res => {
        this.setState({cats: res})
        console.log(this.state.cats)
      })
  }


  render() {

    return (
      <>
        <header role='banner' className='adoption-banner'>
          <h1>Adoption</h1>
        </header>
        <Animal state={this.state}/>
      </>
    )
  }
}

//image
//name
//sex
//age
//breed
//story