import { useState, useEffect, useRef } from 'react';
import { FaTwitter, FaDiscord } from "react-icons/fa";
import Minting from '../../components/Staking/Minting/mint';
// import GameHelp from '../../components/GameHelp/help';
import { Modal, Button} from 'react-bootstrap';
import Opemsea from '../../assets/images/opensea.png';
import Quit from '../../assets/images/quit.png';
import './style.css';
// import { Link } from 'react-router-dom';

// import { FaTwitter, FaDiscord, FaBars } from 'react-icons/fa'

// import Lock from '../../assets/images/lock.png';
// import OpenseaImg from '../../assets/images/opensea.png';
//import { useSelector } from 'react-redux';

const Index = ({ 

}) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);


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
    // const handleWhitepaper = () => {
    //     return (
    //         <GameHelp />
    //     );
    // }

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
        <div>
            <div className="content-container col-lg-6 col-md-6 col-sm-8 col-xs-9 ">
                <div className="soc-icons">
                    <a className="soc-icons-part" arget="_blank" rel="noopener noreferrer" href="https://twitter.com/goldhuntgame">
                                <FaTwitter size={28}/>
                    </a>
                    <a className="soc-icons-part" arget="_blank" rel="noopener noreferrer" href="https://discord.com/invite/vpZpGhNeQh">
                                <FaDiscord size={28}/>
                    </a>
                    <a className="soc-icons-part" arget="_blank" rel="noopener noreferrer" href="https://opensea.io/collection/goldhuntgame">
                                <img src={Opemsea} width="35" />
                    </a>
                    
                </div>
                    <span class="header-title">GOLD HUNT GAME</span>
                <div style={{width:"93%",textAlign: "center", letterSpacing: "-0.5px"}}>
                    <span class="header-info"> GOLDMINERS AND PIRATES COMPETING FOR 
                        <span class="gold"> $GGOLD</span> OF TREASURE ISLAND IN METAVERSE. GET RICH IN AN HONEST WAY BY MINING <span class="gold">$GGOLD</span> OR TEAM UP WITH BARBARIC PIRATES TO GET THE TREASURES YOU TRULY DESERVE. </span>
                </div>
                <div class="header-buttons">
                    <button class="header-button"  onClick={() => setShow(true)}>WHITEPAPER</button>
                </div>
            </div>
            <div className="content-staking col-lg-5 col-md-9 col-sm-9 col-xs-10">
                    <Minting/>
            </div>   
            <Modal style={{opacity:"0.8", backgroundColor:"black"}} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Body style={{backgroundColor:"black"}}>
                    <div className="modal-container">
                        <div className="modal-left-content ">
                     
                                <p className="title-modal">WHITEPAPER</p>
                                <div className="text-gif">
                                    <img className="text-gif-left" src="	https://thegame.gold/assets/gif/3.gif"/>
                                    <span className="text-gif-right"> Once upon a time, in a faraway metaverse, a ship of eager adventurers sailed the oceans in search of new worlds. The ship’s cabin boy shouted, “Land ho! Land ho!” and the ship moored at a large, uninhabited island. By a stroke of luck, this island had an overabundance of gold deposits, so the adventurers turned into Goldminers. They ferried gold bars to the mainland and grew rich enough to hire helpers. But their fortune didn't last long. Treasure-seeking pirates heard about an island that offered a wealth of riches, and they promptly hurried to the island to rob any passing ships! </span>
                                </div>
                                <div className="text-gif" style={{marginTop:"30px"}}>
                                    <span className="text-gif-right"> No one could stop the fearsome Pirates and the robberies that took place from day to day, from hour to hour. So the island’s Governor signed a treaty with the Pirates: the Goldminers would pay the Pirates a fee with <span _ngcontent-kji-c18="" class="gold">$GGOLD</span> mined for safe sailing up to the mainland. But if a Goldminer returns to the mainland and no longer wants to pay the fee, the Pirates would rob that Goldminer blind if they caught up with them. </span>
                                    <img className="text-gif-left" src="https://thegame.gold/assets/gif/5.gif"></img>
                                </div>
                                <span  className="text-gif" style={{marginTop:"30px"}}> Gold Hunt is a homage to the famous Wolf Game, which was hugely popular but had to deviate from the original plan and stop selling tokens. We coveted the best parts from the original game and brought the fight to a new reality, where barbaric Pirates and courageous Goldminers fight for gold on Treasure Island. Most of the mechanics will be well-known to those who’ve played before. So we invite you to delve into the revived and incredibly exciting adventure in order to play to the end, because we have fixed all the bugs and vulnerabilities of the original game that inspired us. </span>
                                <p className="title-modal">CONTRACTS</p>
                                <table _ngcontent-kji-c18="" class="contracts">
                                        <tr><td className="table-td-setting">Goldminer / Pirate NFT:</td><td _ngcontent-kji-c18=""><a style={{color:"white",textDecoration: 'underline'}} target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x66fCA7555CD481545A5e66bA9a2bEC1e256F98e7">0x66fCA7555CD481545A5e66bA9a2bEC1e256F98e7</a></td></tr>
                                        <tr><td className="table-td-setting">Island / Corsair Fleet Staking:</td><td _ngcontent-kji-c18=""><a style={{color:"white",textDecoration: 'underline'}}  target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x06217A2E76604CB63451AC98401B898af038d4b2">0x06217A2E76604CB63451AC98401B898af038d4b2</a></td></tr>
                                        <tr><td className="table-td-setting"><span _ngcontent-kji-c18="" class="gold">$GGOLD</span> Token:</td><td _ngcontent-kji-c18=""><a style={{color:"white",textDecoration: 'underline'}}  target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x5c2E129ec58563c7206229fFb1aDb9dC29db915f">0x5c2E129ec58563c7206229fFb1aDb9dC29db915f</a></td></tr>
                                </table>
                                <p class="title-modal">THE TLDR</p>
                                <span class="tldr col-lg-6 col-md-6 col-sm-8 col-xs-9">
                                        <p> - There will only ever be 10,000 Gen 0, minted for 0.07 ETH each. The 40,000 Gen 1 are minted by mining <span className="gold">$GGOLD</span></p>
                                        <p></p>
                                        <p></p>
                                </span>
                      
                     
                        </div>
                        
                        <div className="modal-quit-content">
                                <mat-icon role="img" className="mat-icon notranslate close material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">
                                            <img src={Quit} width="40" />
                                </mat-icon>
                        </div>
                            {/* <app-whitepaper className="ng-star-inserted">
                                    <mat-icon role="img" className="mat-icon notranslate close material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">
                                            <img src={Quit} width="40" />
                                    </mat-icon>
                                    <div className="content"></div>
                            </app-whitepaper> */}
                    </div>
                </Modal.Body>
            </Modal>
 
        </div>
    )
}

export default Index;