import React, { Component } from 'react';
import Cats from '../../components/Cats/Cats'
import Dogs  from '../../components/Dogs/Dogs'
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

    ApiService.getDogs()
      .then(res => {
        this.setState({dogs: res})
        console.log(this.state.dogs)
      })
  }


  render() {

    return (
      <>
        <header role='banner' className='adoption-banner'>
          <h1>Adoption</h1>
        </header>
        <Cats cats={this.state.cats}/>
        <Dogs dogs={this.state.dogs}/>
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