import React, { Component } from 'react';
import Cats from '../../components/Cats/Cats'
import Dogs  from '../../components/Dogs/Dogs'
import './AdoptionPage.css';
import ApiService from '../../api-service';
import UserList from '../UserList/UserList'
import Thumbs from '../../components/thumbs/thumbs';

export default class AdoptionPage extends Component {

  constructor(props){
    super(props);
    this.state= {
      cats: [],
      dogs: [],
      users: [],
      queuePosition: 0,
    }
  }

  componentDidMount() {

    ApiService.getCats()
      .then(res => {
        this.setState({cats: res})
        console.log('GETCATS RES: ', res)
      })


    ApiService.getDogs()
      .then(res => {
        this.setState({dogs: res})
        console.log('GETDOGS RES: ', res)

      })

    ApiService.getUsers()
      .then(res => {
        this.setState({users: res})
        console.log('GETUSERS RES: ', res)
      })
      .then(this.countUserQueue.bind(this))
  }

  countUserQueue(){
    let user = this.state.users.users.first;
    let counter = 0;
    while(user.next !== null) {
      counter++;
      user = user.next;
    }
    console.log('counter: ',counter)
    console.log('this.state.users.users.first: ', this.state.users.users.first)
    this.setState({queuePosition: counter});
  }

  simulateAdoption() {
    let position = this.state.queuePosition

    if (position === 2) {
      // dequeue one user and one dog
      ApiService.deleteUser()
        .then(res => {
          this.setState({ users: res })
        })
        .then(() => {
          this.countUserQueue()
        })
      
      ApiService.deleteDog()
        .then(res => {
          this.setState({ dogs: res })
        })
    }

    else if (position === 1) {
      ApiService.deleteUser()
        .then(res => {
          this.setState({ users: res })
        })
        .then(() => {
          this.countUserQueue()
        })
      
      ApiService.deleteCat()
        .then(res => {
          this.setState({ cats: res })
        })
    }
  }

  render() {
    return (
      <>
        <header role='banner' className='adoption-banner'>
          <h1>Adoption</h1>

          <UserList />
        </header>
        <div className='animal-display'>
          <Cats cats={this.state.cats} queuePosition={this.state.queuePosition}/>
          <Dogs dogs={this.state.dogs} queuePosition={this.state.queuePosition}/>
        </div>
        <div className='thumb-display'>
          <Thumbs animals={this.state.cats && this.state.cats.cats}/>
          <Thumbs animals={this.state.dogs && this.state.dogs.dogs}/>
        </div>


        


        <div className='position'>
          {'Place in line: ' + this.state.queuePosition}
        </div>

        <button onClick={() => this.simulateAdoption()} className='simulate-button'>Simulate</button>



        

      </>
    )
  }
}

//when update button gets pressed:
//1) dequeue a user
//2) dequeue a cat or a dog


//thumbnail row of remaining animals

//there are X users in front of you