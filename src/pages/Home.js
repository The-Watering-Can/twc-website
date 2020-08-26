import React from 'react';
import '../assets/style.css';
import Colors from '../assets/colors'

import Hero from '../components/Hero'
import Header from '../components/Header'
import Panel from '../components/Panel'

import startChapterIcon from '../assets/images/startChapterIcon.png';
import startChapterImg from '../assets/images/startChapterImg.png';
import joinChapterIcon from '../assets/images/joinChapterIcon.png';
import joinChapterImg from '../assets/images/joinChapterImg.png';
import restaurantIcon from '../assets/images/restaurantIcon.png';
import restaurantImg from '../assets/images/restaurantImg.png';

const Home = () => (
  <div>
    <Header solid={false} />
    <Hero />

    <div className="section my-container center">
      <Panel title="Join a Chapter" icon={joinChapterIcon} img={joinChapterImg} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rhoncus ligula, vitae ultrices ante tempus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Panel title="Start a Chapter" icon={startChapterIcon} img={startChapterImg} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rhoncus ligula, vitae ultrices ante tempus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <Panel title="Restaurant" icon={restaurantIcon} img={restaurantImg} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rhoncus ligula, vitae ultrices ante tempus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </div>
  </div>
)

export default Home


