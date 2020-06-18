import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { addBrewAction } from '../redux';
import './Treats.css'

function Treats(props) {
    const [treatvalue, _treatValue] = useState('');

    const handleSizeChange = (event) => {
      _treatValue(event.target.value);
      console.log(treatvalue)
    };


    const submit =(event)=>{
      console.log('submitted')
        event.preventDefault();
        props.addBrewAction({
          id: uuid(),
          name: treatvalue,
          complete: false
        });
        _treatValue('');
        
    }



    return (
        <div className="container">
            <div className="Treats">
            <FormControl component="fieldset">
        <FormLabel component="legend"><h3>Treats</h3></FormLabel>
        <RadioGroup aria-label="Size" name="size" value={treatvalue} onChange={handleSizeChange}>
          <FormControlLabel value="Pecan Pie $4.25" control={<Radio />} label="Pecan Pie $4.25" />
          <FormControlLabel value="Oreo Milk Shake $4.50" control={<Radio />} label="Oreo Milk Shake $4.50" />
          <FormControlLabel value="Brownie $3.50" control={<Radio />} label="Brownie $3.50" />
          <FormControlLabel value="Cookie $.50" control={<Radio />} label="Cookie $.50" />
        </RadioGroup>
      </FormControl>
            </div>
            <br/>
            <button className='submitBtn' onClick={submit}>Bake Now</button>
        </div>  
    );
  }

  const mapStateToProps = (state) => ({
    brews: state.treatvalue
  });

  export default connect(
    mapStateToProps,
    { addBrewAction }
  )(Treats);