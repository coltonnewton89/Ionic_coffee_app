import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { addBrewAction } from '../redux';
import './Coffee.css'

function Coffee(props) {
    const [coffeevalue, _coffeeValue] = React.useState('');
    const [coffeeFlavorValue, _coffeeFlavorValue] = React.useState('');

    const handleSizeChange = (event) => {
      _coffeeValue(event.target.value);
    };

    const handleFlavorChange = (e) =>{
        _coffeeFlavorValue(e.target.value)
    }

    const submit =(event)=>{
        event.preventDefault();
        props.addBrewAction({
          id: uuid(),
          name: coffeevalue,
          complete: false,
          flavor: coffeeFlavorValue
        });
        _coffeeValue('');
        _coffeeFlavorValue('')
        alert('We recieved your order! When finished, please Navigate to Your Orders to check out!')
    }
  
    return (
        <div className="container" style={{marginTop:'12%'}}>
            <div className="size">
            <FormControl component="fieldset">
        <FormLabel component="legend"><h3>Size</h3></FormLabel>
        <RadioGroup aria-label="Size" name="size" value={coffeevalue} onChange={handleSizeChange}>
          <FormControlLabel value="Small $2.00" control={<Radio />} label="Small $2.00" />
          <FormControlLabel value="Medium $2.50" control={<Radio />} label="Medium $2.50" />
          <FormControlLabel value="Large $3.00" control={<Radio />} label="Large $3.00" />
          <FormControlLabel value="X-Large $4.00" control={<Radio />} label="X-Large $4.00" />
        </RadioGroup>
      </FormControl>
            </div>
            <br/>
            <div className="flavor">
            <FormControl component="fieldset">
        <FormLabel component="legend"><h3>Flavor</h3></FormLabel>
        <RadioGroup aria-label="Flavor" name="Flavor" value={coffeeFlavorValue} onChange={handleFlavorChange}>
          <FormControlLabel value="Light coffee" control={<Radio />} label="Light" />
          <FormControlLabel value="Medium coffee" control={<Radio />} label="Medium" />
          <FormControlLabel value="Dark coffee" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
            </div>
            <button className='submitBtn' onClick={submit}>Brew Now</button>
        </div>  
    );
  }

  const mapStateToProps = (state) => ({
    brews: state.brews
  });

  export default connect(
    mapStateToProps,
    { addBrewAction }
  )(Coffee);

