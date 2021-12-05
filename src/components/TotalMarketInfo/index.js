// import React from 'react'
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Form } from 'react-bootstrap';
import './style.css';
import coin from "../../assets/images/Coin.png";
const Staking = () => {
    let LoanArr = Array(65);
    let logo="";
    let logo_percent;
    for(var i = 0; i < LoanArr.length; i++) {
        LoanArr[i] = i+1+"%";
    }
    let itemList=[];
    LoanArr.forEach((item,index)=>{
    itemList.push( <option className="dropdown" value={index}>{LoanArr[index]}</option>)
    })


    let LoanArr1 = Array(180);
    for(var i = 0; i < LoanArr1.length; i++) {
        if (i==0)
        {
            LoanArr1[i] = i+1+"day";
        }
        else{
            LoanArr1[i] = i+1+"days";
        }
        
    }
    let itemListDay=[];
    LoanArr1.forEach((item,index)=>{
    itemListDay.push( <option className="dropdown" value={index}>{LoanArr1[index]}</option>)
    })


 
    // const [logo_percent, setLogo] = React.useState('');
    const [loanprice, setLoanprice] = React.useState('');
    const handleChange = (event) => {
        var value=event.target.value;
        var count = value;
        count++;
        var count1=count*0.0000001;
        setLoanprice(count1);
    };
    return (
        <div className="col-sm-12 mb-4 new-data">
                <div className="content_box">
                    <div className="main_box col-lg-5 col-md-6 col-sm-8 col-xs-4">
                        <div>
                            <div className="staking_box">Staking
                                <h6 style={{lineHeight:2}}>Stake tokens in an instance.</h6>
                            </div>
                            <div className="staking_content_box">
                                <div>
                                    <div className="lunchToken_box">
                                        <img src={coin} width="30" />
                                        <p className="coin_img_interval">$LUNCH</p>
                                    </div>
                                    <div className="lunchToken_box topInterval">
                                        <p className="text_within">The floor price from OpenSea: </p><lavel className="coin_img_interval">0.0000001$</lavel>
                                    </div>
                                    <div className="lunchToken_box topInterval">
                                        <p className="text_within">Borrow price: </p><lavel className="coin_img_interval">{loanprice}</lavel>
                                    </div>
                                    <div>
                                                <Form.Select menuPlacement="bottom" aria-label="Default select example" className="select_setting topInterval1" onChange={handleChange}>
                                                        <option>Borrow Price</option>
                                                        {itemList}                                                   
                                                </Form.Select>
                                    </div>
                                    <div className="lunchToken_box topInterval">
                                        <p className="text_within">Borrow Time: </p>
                                    </div>
                                    <div>
                                                <Form.Select menuPlacement="bottom" aria-label="Default select example" className="select_setting topInterval1" onChange={handleChange}>
                                                        <option>Borrow Time</option>
                                                        {itemListDay}                                                   
                                                </Form.Select>
                                    </div>
                                    <button className="confirm_button_radius mt-3 approve-btn text-white text-center py-4 w-100">Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                









                
          
        </div>













    )
}

export default Staking
