import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonIcon } from '@ionic/react';
import {NavLink} from 'react-router-dom'
import zIndex from '@material-ui/core/styles/zIndex';
class Segment extends Component {
    state = {  }
    render() { 
        return ( 
              
                  
        <div style={{marginTop:'15%', zIndex:2}}>
          <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
            
            <NavLink to='/Home/Coffee'>
            <IonSegmentButton value="Coffee">
            <IonLabel>Coffee</IonLabel>
            </IonSegmentButton>
            </NavLink>
              
              
              <NavLink to='/Home/Tea'>
              <IonSegmentButton value="Tea">
              <IonLabel>Tea</IonLabel>
              </IonSegmentButton>
              </NavLink>
              
  
              <NavLink to='/Home/Treats'>
              <IonSegmentButton value="Treats">              
              <IonLabel>Treats</IonLabel>                        
              </IonSegmentButton>
              </NavLink>    
  
            </IonSegment>
        </div>
          
         );
    }
}
 
export default Segment;