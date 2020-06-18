import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Segment from '../components/Segment'
import HomeRouter from '../HomeRouter'

import './Home.css';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      
      <IonPage>
        
        
        <BrowserRouter>
        <Segment/>
        <HomeRouter/>
        </BrowserRouter>
        
      </IonPage>
     );
  }
}
 
export default Home;
