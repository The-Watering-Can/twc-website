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
      <Panel title="Join a Chapter" icon={joinChapterIcon} img={joinChapterImg} description="We currently have one chapter at the University of Texas at Austin. If you’d like to join, please click here for the interest form." />
      <Panel title="Start a Chapter" icon={startChapterIcon} img={startChapterImg} description="If you’re interested in creating a chapter at your university, fill out the form by clicking here." />
      <Panel title="Restaurant" icon={restaurantIcon} img={restaurantImg} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat rhoncus ligula, vitae ultrices ante tempus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </div>
  </div>
)

export default Home


// useEffect(() => {
//   const rateApp = async () => {
//     const isAlreadyRated = await AsyncStorage.getItem('isAlreadyRated');
//     const countStartApp = await AsyncStorage.getItem('countStartApp');
//     const count = countStartApp ? parseInt(countStartApp) : 1;
//     // console.log("isalreadyrate: " + isAlreadyRated);
//     // console.log("count: " + count);
//     if (!isAlreadyRated && count % 3 === 0) {
//       Alert.alert('App Rating', 'Please give us your opinion!', [
//         {
//           text: 'Later',
//           // onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel'
//         },
//         {
//           text: 'OK',
//           onPress: () => {
//             setTimeout(() => {
//               const options = {
//                 AppleAppID: '1471189304',
//                 GooglePackageName: 'com.unmasked',
//                 AmazonPackageName: 'com.unmasked',
//                 preferredAndroidMarket: AndroidMarket.Google,
//                 preferInApp: true,
//                 openAppStoreIfInAppFails: true
//               };
//               Rate.rate(options, (success) => {
//                 if (success) {
//                   AsyncStorage.setItem('isAlreadyRated', 'true');
//                 }
//               });
//             }, 500);
//           }
//         }
//       ]);
//     }
//     await AsyncStorage.setItem('countStartApp', `${count + 1}`);
//   };

//   rateApp();
// }, []);