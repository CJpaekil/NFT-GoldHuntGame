// import React from 'react'
import React, { useState } from 'react';
import WhitePaper from '../WhitePaper/index';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Form } from 'react-bootstrap';
import './style.css';
import coin from "../../assets/images/Coin.png";
const Staking = () => {
    // let LoanArr = Array(65);
    // let logo="";
    // let logo_percent;
    // for(var i = 0; i < LoanArr.length; i++) {
    //     LoanArr[i] = i+1+"%";
    // }
    // let itemList=[];
    // LoanArr.forEach((item,index)=>{
    // itemList.push( <option className="dropdown" value={index}>{LoanArr[index]}</option>)
    // })


    // let LoanArr1 = Array(180);
    // for(var i = 0; i < LoanArr1.length; i++) {
    //     if (i==0)
    //     {
    //         LoanArr1[i] = i+1+"day";
    //     }
    //     else{
    //         LoanArr1[i] = i+1+"days";
    //     }
        
    // }
    // let itemListDay=[];
    // LoanArr1.forEach((item,index)=>{
    // itemListDay.push( <option className="dropdown" value={index}>{LoanArr1[index]}</option>)
    // })


 
    // // const [logo_percent, setLogo] = React.useState('');
    // const [loanprice, setLoanprice] = React.useState('');
    // const handleChange = (event) => {
    //     var value=event.target.value;
    //     var count = value;
    //     count++;
    //     var count1=count*0.0000001;
    //     setLoanprice(count1);
    //};
    return (
        <div className="col-sm-12 new-data">
                <div className="bg-set">
                    <div className="game-content">
                        <WhitePaper/>
                    </div>
                </div>     
        </div>

    )
}

export default Staking
