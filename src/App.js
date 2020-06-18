import React, { Component } from 'react';

import ButtonAppBar from './components/ButtonAppBar'
import Router from './Router'
import { IonApp } from '@ionic/react';
import { BrowserRouter } from 'react-router-dom';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

class App extends Component {
  state = {  }
  render() { 
    return ( 
    
      
        <IonApp color='primary'>
        <BrowserRouter>
        <ButtonAppBar style={{zIndex:2}}/>               
        <Router style={{alignText:'center'}}/>
        </BrowserRouter>
        </IonApp>
      
     );
  }
}
 
export default App;
