import { useState, useEffect, useRef } from 'react';
// import { FaTwitter, FaDiscord } from "react-icons/fa";
// import Opemsea from '../../assets/images/opensea.png';
import './style.css';
// import { Link } from 'react-router-dom';

// import { FaTwitter, FaDiscord, FaBars } from 'react-icons/fa'

// import Lock from '../../assets/images/lock.png';
// import OpenseaImg from '../../assets/images/opensea.png';
//import { useSelector } from 'react-redux';

const staking = ({ 

}) => {
    // const ref = useRef(null)

    // const history = useHistory();

    // const [isSticky, setSticky] = useState(false)
    // const [showNarrow, setShowNarrow] = useState(false)
    // const [header_dropdown_menu, showDropDownMenu] = useState(false)

    // const { toggle_sticky, walletAddress, accountBalance } = useSelector(state => state.connect)

    // const handleScroll = () => {
    //     setSticky( window.scrollY > 100 )
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    //     return () => {
    //         window.removeEventListener('scroll', () => handleScroll)
    //     };
    // }, [])

    // const getOffset = (el) => {
    //     const rect = el.getBoundingClientRect();
    //     return {
    //         left: rect.left + window.scrollX,
    //         top: rect.top + window.scrollY
    //     };
    // }

    // const handleClickMenu = async (aid) => {
    //     const elem = document.getElementById(aid)
    //     if(elem !== null) {
    //         const posY = getOffset(elem).top;
    //         if(isSticky) {
    //             window.scrollTo(window.scrollX, posY - 70)
    //         } else {
    //             window.scrollTo(window.scrollX, posY - 200)
    //         }
    //         history.push('/#' + aid)
    //     } else {
    //         history.push('/#' + aid)
    //         await sleep(500);
    //         handleNavigate(aid)
    //     }
    // }

    // const sleep = (milliseconds) => {
    //     return new Promise(resolve => setTimeout(resolve, milliseconds))
    // }

    // const handleNavigate = (aid) => {
    //     const elem = document.getElementById(aid)
    //     if(elem !== null) {
    //         const posY = getOffset(elem).top;
    //         if(isSticky) {
    //             window.scrollTo(window.scrollX, posY - 70)
    //         } else {
    //             window.scrollTo(window.scrollX, posY - 200)
    //         }
    //         history.push('/#' + aid)
    //     } 
    // }

    return (
        <div className="content-container">
            <div className="content1">
                    <div class="screen">
                            <img src="https://thegame.gold/assets/images/scroll-stick.svg" class="scroll-stick"/>
                            <app-mint-block class="scroll-content">
                                        <span class="title">MINTING</span>
                                        <div class="progress-block">
                                            <div class="progress-bar" style={{width: "58.3263%"}}></div>
                                            <div class="progress-block-section">GEN 0 SOLD OUT</div>
                                            <div class="progress-block-section">20.000 $GGOLD</div>
                                            <div class="progress-block-section">40.000 $GGOLD</div>
                                            <div class="progress-block-section" style={{borderRight:"none"}}>80.000 $GGOLD</div>
                                        </div>
                                        <span class="amount">26661 / 50000 MINTED</span>
                                        <div class="mint-section">
                                                <div class="mint-section-buttons">
                                                        <div class="mint-section-button-block"><button class="mint-section-button">MINT</button></div>
                                                        <div class="mint-section-button-block"><button class="mint-section-button">MINT &amp; STAKE</button><span class="mint-section-button-info">(SAVE GAS)</span></div>
                                                </div>
                                                <div class="mint-section-bottom">
                                                        <div class="mint-section-bottom-amount">
                                                            <span class="mint-section-bottom-amount-text">AMOUNT:</span><span class="mint-section-bottom-amount-value">1</span>
                                                            {/* <mat-icon _ngcontent-rdw-c14="" role="img" class="mat-icon notranslate material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">chevron_right</mat-icon> */}
                                                        </div>
                                                        <div class="mint-section-bottom-cost"><span class="mint-section-bottom-cost-text">COST:</span><span class="mint-section-bottom-cost-value">40000 $GGOLD</span></div>
                                                </div>
                                        </div>
                                            {/* <button class="connect-button">CONNECT WALLET</button> */}
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
                    <div class="screen">
                        <img src="https://thegame.gold/assets/images/scroll-stick.svg" class="scroll-stick"/>
                            <app-mint-block class="scroll-content">
                                    <span class="balance">YOUR WALLET FUNDS:&nbsp;&nbsp;&nbsp;0 <span>$GGOLD</span></span>
                                    <p class="title">UNSTAKED</p>
                                    <app-token-carousel class="carousel">
                                        <div class="scroll-wrapper"></div>
                                        {/* <mat-icon role="img" class="mat-icon notranslate action refresh material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">refresh</mat-icon> */}
                                        
                                    </app-token-carousel>
                                    <img src="https://thegame.gold/assets/images/wrinkle.svg" class="wrinkle"></img>
                                    <span class="title">STAKED</span>
                                    <span class="subtitle">ON ISLAND</span>
                                    <app-token-carousel class="carousel island">
                                        <div class="scroll-wrapper"></div>
                                        {/* <mat-icon role="img" class="mat-icon notranslate action refresh material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">refresh</mat-icon> */}
                                        
                                    </app-token-carousel>
                                    <span  class="subtitle">ON CORSAIR FLEET</span>
                                    <app-token-carousel class="carousel fleet">
                                        <div class="scroll-wrapper"></div>
                                    </app-token-carousel>
                                    <span class="actions-info">SELECT TOKENS TO STAKE, CLAIM OR UNSTAKE</span>
                            </app-mint-block>

                        <img src="https://thegame.gold/assets/images/scroll-stick.svg" class="scroll-stick"></img>

                    </div>
             </div>   
        </div>
    )
}

export default staking;