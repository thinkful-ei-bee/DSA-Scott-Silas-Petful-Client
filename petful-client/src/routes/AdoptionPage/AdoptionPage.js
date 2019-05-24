import React, { Component } from 'react';
import Animal from '../../components/Animal/Animal'
import './AdoptionPage.css';
import ApiService from '../../api-service';
import UserList from '../UserList/UserList'

export default class AdoptionPage extends Component {

  constructor(props){
    super(props);
    this.state= {
      cats: [],
      dogs: [],
    }
  }
//<Animal cats={this.state.cats}/>

  componentDidMount() {
    ApiService.getCats()
      .then(res => {
        this.setState({cats: res})
        console.log(this.state.cats)
      })

    ApiService.postUser()
      .then(res => {
        console.log('POSTUSER RES: ', res)
      })
  }


  render() {
    return (
      <>
        <header role='banner' className='adoption-banner'>
          <h1>Adoption</h1>

          <UserList />
        </header>

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