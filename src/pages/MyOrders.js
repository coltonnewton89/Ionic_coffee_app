import React from 'react';
import { connect } from 'react-redux';
import {  deleteBrewAction } from '../redux';
import './MyOrders.css'
import { IonPage } from '@ionic/react';

const MyOrders = (props)=> {
    const { brews } = props;
    
    const deleteBrew = (brewId) => {
        props.deleteBrewAction(brewId);
      };

      function brewing(){
          if(document.getElementById('jetLee') == null){
            alert('Please go to Home to select items')
          }else
          alert("Your order will be available shortly!")
      }

        return ( 
            <IonPage>
                <div className="container">
                    <h3>Your current order</h3>
                    <ul className="brew-list"  id='bruceLee'>
                    {brews.map((brew) => (
                    <li key={brew.id} id='jetLee'>
          
                    <span className={brew.complete ? 'complete' : null}>{brew.name}</span>
                    <span className={brew.complete ? 'complete' : null}>{brew.flavor == undefined ? null: ' '+brew.flavor}</span>
                    <span
                    className="delete-button"
                    onClick={deleteBrew.bind(null, brew.id)}>
                    X
                    </span>
                    </li>
                    ))}
                    </ul>

                    <button className='checkOutBtn' onClick={brewing}>Check Out</button>
                </div>

                
            </IonPage>
         );
    
}
 
const mapStateToProps = (state) => ({
  brews: state.brews
});

export default connect(
  mapStateToProps,
  {  deleteBrewAction }
)(MyOrders);