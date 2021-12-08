import { useState, useEffect, useRef } from 'react';
import Staking from '../Staking/staking';
// import { FaTwitter, FaDiscord } from "react-icons/fa";
// import Opemsea from '../../assets/images/opensea.png';
import './style.css';

// import { Link } from 'react-router-dom';

// import { FaTwitter, FaDiscord, FaBars } from 'react-icons/fa'

// import Lock from '../../assets/images/lock.png';
// import OpenseaImg from '../../assets/images/opensea.png';
//import { useSelector } from 'react-redux';

const Mint = ({ 

}) => {

    const [phantom, setPhantom] = useState(false);
    const handleConnect = () => {
        setPhantom(true);
        window.solana.on("connect", () => console.log("connected!"))
        if (window.solana.isConnected)
        {
            setPhantom(true);
        }
    };

    return (
        <div className="content single-scroll">
        {phantom?(
            <Staking/>
        ):(
        <>
            <div class="scroll content-staking col-lg-5 col-md-9 col-sm-9 col-xs-10">
                <img src="https://thegame.gold/assets/images/scroll-stick.svg" class="scroll-stick"/>
                <app-mint-block class="scroll-content"><p></p>
                            <span class="title">MINTING</span>
                            <div class="progress-block">
                                <div class="progress-bar" style={{width: "58.3263%"}}></div>
                                <div class="progress-block-section">GEN 0 SOLD OUT</div>
                                <div class="progress-block-section">20.000 $GGOLD</div>
                                <div class="progress-block-section">40.000 $GGOLD</div>
                                <div class="progress-block-section" style={{borderRight:"none"}}>80.000 $GGOLD</div>
                            </div>
                            <span class="amount">26661 / 50000 MINTED</span>
                            
                               
                                <button class="connect-button" onClick={handleConnect}>CONNECT WALLET</button>
                                <img src="https://thegame.gold/assets/images/wrinkle.svg" class="wrinkle"></img>
                                <span class="title">GAME STATUS</span>
                                <div class="status-block">
                                        <div class="status-block-item">
                                            <span class="status-block-item-label">GOLDMINER MINTED:</span>
                                            <span class="status-block-item-value">23986</span>
                                        </div>
                                        <div class="status-block-item">
                                            <span class="status-block-item-label">GOLDMINER STAKED:</span>
                                            <span class="status-block-item-value">21561</span>
                                        </div>
                                        <div class="status-block-item">
                                            <span class="status-block-item-label">PIRATE MINTED:</span>
                                            <span class="status-block-item-value">2675</span>
                                        </div>
                                        <div class="status-block-item">
                                            <span class="status-block-item-label">PIRATE STAKED:</span>
                                            <span class="status-block-item-value">2533</span>
                                        </div>
                                        <div class="status-block-item">
                                            <span class="status-block-item-label">GOLDMINER STOLEN:</span>
                                            <span class="status-block-item-value">1396</span>
                                        </div>
                                        <div class="status-block-item">
                                            <span class="status-block-item-label">PIRATE STOLEN:</span>
                                            <span class="status-block-item-value">168</span>
                                        </div>
                                        <div class="status-block-item">
                                            <span class="status-block-item-label">$GGOLD ACCUMULATED:</span>
                                            <span class="status-block-item-value">1028488918</span>
                                        </div>
                                        <div class="status-block-item">
                                            <span class="status-block-item-label">$GGOLD CLAIMED:</span>
                                            <span class="status-block-item-value">115299230</span>
                                        </div>
                                    </div>
                          
                            
                </app-mint-block>
                <img src="https://thegame.gold/assets/images/scroll-stick.svg" class="scroll-stick"></img>
            </div>
            </>
            )}
        </div>
       



    )
}

export default Mint;