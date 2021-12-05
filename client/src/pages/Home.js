import React, { useContext, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import leftImgDsh from '../assets/left_dash.png';
import RightImgDsh from '../assets/right_dash.png';
import { MDBInput} from 'mdbreact';
import { StartTest } from '../redux/actions/userActions';
import './style.css';


const Home = () => {
    const currencies = [
        {
          value: 'Program',
          label: 'Program',
        },
        {
          value: 'Sport',
          label: 'Sport',
        },
      ];
      const mystyle = {
        width:"100%"
      };  
    const dispatch = useDispatch();
    const [currency, setCurrency] = React.useState('EUR');
    const [user_name, setUserName] = useState("");
    const handleChange = (event) => {
        setCurrency(event.target.value);
      };
    const setName = (e) => {
      setUserName(e.target.value);
    }

    const handleTest = () => { 
        dispatch(StartTest(user_name, currency))


    }
    useEffect(() => {
        //authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div class="container">
            <section id="hero">
                <div class="main_position">
                    <div class="row">
					 		        <div class="col-md-4"><img src={leftImgDsh} alt=""/></div>
                      <div class="col-md-4 middle_dash">
                                <h1 class="techTxt">Technical Task</h1>
                                {/* <Input id="card1" label="Card One" value={this.state.card1} /> */}
                                <MDBInput id="user_name" value={user_name} onChange={setName} label='Enter your name' />
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Choose Test"
                                    value={currency}  
                                    style={mystyle} 
                                    onChange={handleChange}
                                    helperText="Please select your test"
                                    variant="standard"
                                    >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <button data-test="button" onClick={handleTest} class="btn-secondary btn Ripple-parent testBtn">
                                    Start
                                </button>
                            </div>
							          <div class="col-md-4"><img src={RightImgDsh} alt=""/></div>
		
					          </div>
                </div>
            </section>
        </div>
        // <div className='grid-2'>
        //     <div>
        //         <ContactForm/>
    
        //     </div>
        //     <div>
        //         <ContactFilter />
        //         <Contacts />
        //     </div>
        // </div>
    );
};

export default Home
