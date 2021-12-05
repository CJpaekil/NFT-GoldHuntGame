import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import './Header.css';

const Header = () => {
    // const dispatch = useDispatch();
    // const { isAuthenticated } = useSelector(state => state.auth);

    return (
        <div className="container">
            <div className="row header header-top">
                <div className="logo col-md-2">
                    <img src={Logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;