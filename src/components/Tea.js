import React from 'react';
import { IonPage } from '@ionic/react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { addBrewAction } from '../redux';
import './Tea.css'

const Tea=(props)=> {
    const [value, setValue] = React.useState('');
    const [flavorValue, setFlavorValue] = React.useState('');

    const handleSizeChange = (event) => {
      setValue(event.target.value);
    };

    const handleFlavorChange = (e) =>{
        setFlavorValue(e.target.value)
    }

    const submit =()=>{
        console.log('submitted')
        props.addBrewAction({
          id: uuid(),
          name: value,
          complete: false,
          flavor: flavorValue
        });
        setValue('');
        setFlavorValue('')

    }

    if(value != ''){
        console.log(value)
    }

    if(flavorValue != ''){
        console.log(flavorValue)
    }
  
    return (
        <div className="container">
            <div className="size">
            <FormControl component="fieldset">
        <FormLabel component="legend"><h3>Size</h3></FormLabel>
        <RadioGroup aria-label="Size" name="size" value={value} onChange={handleSizeChange}>
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
        <RadioGroup aria-label="Flavor" name="Flavor" value={flavorValue} onChange={handleFlavorChange}>
          <FormControlLabel value="Green Tea" control={<Radio />} label="Green" />
          <FormControlLabel value="Chai Tea" control={<Radio />} label="Chai" />
          <FormControlLabel value="Mint Tea" control={<Radio />} label="Mint" />
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
  )(Tea);

