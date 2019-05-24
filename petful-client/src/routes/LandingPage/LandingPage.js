import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../images/Banner-Image.png';
import './LandingPage.css';

export default class LandingPage extends Component {

  render() {

    return (
      <>
        <header role='banner' className='banner'>
          <h1>PetFul</h1>
          <img src={bannerImage} alt='cats and dogs'></img>
        </header>

        <section className='welcome-message'>
          <p>
          Welcome to PetFul, an organization that connects beautiful animals with loving homes!
          </p>
          <p>
          In order to ensure that all our rescues find homes, PetFul animals are first in first out,
          meaning the animals that have been in shelter the longest are the next to get adopted!
          </p>
          <p>
          Click the link below to start your adoption process!
          </p>
        </section>

        <div className='get-started-button'>
          <Link to='/Adoption' className='get-started-link'>
            Get Started
          </Link>
        </div>
      </>
    )
  }
}