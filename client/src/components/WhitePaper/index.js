import { useState, useEffect, useRef } from 'react';
// import { FaTwitter, FaDiscord } from "react-icons/fa";
import Minting from '../../components/Staking/Minting/mint';
// import GameHelp from '../../components/GameHelp/help';
import { Modal, Button} from 'react-bootstrap';
import Discord from '../../assets/images/discord.png';
import Twitter from '../../assets/images/twitter.png';
import Opensea from '../../assets/images/opensea.png';
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
                                <img src={Twitter} width="32" />
                    </a>
                    <a className="soc-icons-part" arget="_blank" rel="noopener noreferrer" href="https://discord.com/invite/vpZpGhNeQh">
                                <img src={Discord} width="32" />
                    </a>
                    <a className="soc-icons-part" arget="_blank" rel="noopener noreferrer" href="https://opensea.io/collection/goldhuntgame">
                                <img src={Opensea} width="32" />
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
            <div>zxcsdfsdfdfgdcvxvdfg</div>
            <div>
            <Minting/>
            </div>   
            <Modal style={{opacity:"0.8", backgroundColor:"black"}} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Body style={{backgroundColor:"black"}}>
                    <div className="modal-container">
                        <div className="modal-left-content">
                            <div className="modal-main-part col-lg-7 col-md-11 col-sm-11">
                                <p className="title-modal">WHITEPAPER</p>
                                <div className="row text-gif">
                                    <img className="text-gif-left" src="https://thegame.gold/assets/gif/3.gif"/>
                                    <span className="text-gif-right"> Once upon a time, in a faraway metaverse, a ship of eager adventurers sailed the oceans in search of new worlds. The ship’s cabin boy shouted, “Land ho! Land ho!” and the ship moored at a large, uninhabited island. By a stroke of luck, this island had an overabundance of gold deposits, so the adventurers turned into Goldminers. They ferried gold bars to the mainland and grew rich enough to hire helpers. But their fortune didn't last long. Treasure-seeking pirates heard about an island that offered a wealth of riches, and they promptly hurried to the island to rob any passing ships! </span>
                                </div>
                                <div className="row text-gif" style={{marginTop:"30px"}}>
                                    <span className="text-gif-right"> No one could stop the fearsome Pirates and the robberies that took place from day to day, from hour to hour. So the island’s Governor signed a treaty with the Pirates: the Goldminers would pay the Pirates a fee with <span _ngcontent-kji-c18="" class="gold">$GGOLD</span> mined for safe sailing up to the mainland. But if a Goldminer returns to the mainland and no longer wants to pay the fee, the Pirates would rob that Goldminer blind if they caught up with them. </span>
                                    <img className="text-gif-left" src="https://thegame.gold/assets/gif/5.gif"></img>
                                </div>
                                <span  className="text-gif" style={{marginTop:"30px"}}> Gold Hunt is a homage to the famous Wolf Game, which was hugely popular but had to deviate from the original plan and stop selling tokens. We coveted the best parts from the original game and brought the fight to a new reality, where barbaric Pirates and courageous Goldminers fight for gold on Treasure Island. Most of the mechanics will be well-known to those who’ve played before. So we invite you to delve into the revived and incredibly exciting adventure in order to play to the end, because we have fixed all the bugs and vulnerabilities of the original game that inspired us. </span>
                                <p className="title-modal">CONTRACTS</p>
                                <table _ngcontent-kji-c18="" className="contracts">
                                        <tr className="row"><td className="table-td-setting">Goldminer / Pirate NFT:</td><td className="table-td-setting1"><a style={{color:"white",textDecoration: 'underline'}} target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x66fCA7555CD481545A5e66bA9a2bEC1e256F98e7">0x66fCA7555CD481545A5e66bA9a2bEC1e256F98e7</a></td></tr>
                                        <tr className="row"><td className="table-td-setting">Island / Corsair Fleet Staking:</td><td className="table-td-setting1"><a style={{color:"white",textDecoration: 'underline'}}  target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x06217A2E76604CB63451AC98401B898af038d4b2">0x06217A2E76604CB63451AC98401B898af038d4b2</a></td></tr>
                                        <tr className="row"><td className="table-td-setting"><span _ngcontent-kji-c18="" class="gold">$GGOLD</span> Token:</td><td className="table-td-setting1"><a style={{color:"white",textDecoration: 'underline'}}  target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x5c2E129ec58563c7206229fFb1aDb9dC29db915f">0x5c2E129ec58563c7206229fFb1aDb9dC29db915f</a></td></tr>
                                </table>
                                <p class="title-modal">THE TLDR</p>
                                <div class="tldr col-lg-6 col-md-10">
                                        <p> - There will only ever be 10,000 Gen 0, minted for 0.07 ETH each. The 40,000 Gen 1 are minted by mining <span className="gold">$GGOLD</span>.</p><br/>
                                        <p> - Goldminers can be staked in the Island to earn <span _ngcontent-swv-c18="" class="gold">$GGOLD</span> and pay a tax anytime they claim their <span _ngcontent-swv-c18="" class="gold">$GGOLD</span> earnings.</p><br/>
                                        <p> - If a Goldminer is unstaked from the Island, the Pirates try to steal all of its accumulated <span _ngcontent-swv-c18="" class="gold">$GGOLD</span>.</p><br/>
                                        <p> - When a new Goldminer is hired, the Pirates attempt to kidnap it. If they’re successful, it’s given to a randomly selected Pirate, instead of the NFT owner who minted it </p>
                                </div>
                                <p class="title-modal">MINTING</p>
                                <table class="minting">
                                        <tr><th className="minting-table-th">TOKEN ID</th><th className="minting-table-th">MINTING COST</th></tr>
                                        <tr><th className="minting-table-th">1 to 10,000 (Gen 0)</th><th className="minting-table-th">0.07 ETH</th></tr>
                                        <tr><th className="minting-table-th">10,001 to 20,000</th><th className="minting-table-th">20,000 <span class="gold">$GGOLD</span></th></tr>
                                        <tr><th className="minting-table-th">20,001 to 40,000</th><th className="minting-table-th">40,000 <span class="gold">$GGOLD</span></th></tr>
                                        <tr><th className="minting-table-th">40,001 to 50,000</th><th className="minting-table-th">80,000 <span class="gold">$GGOLD</span></th></tr>
                                </table>
                                <p style={{marginTop: "30px"}}>The total cost to mint all of the Goldminers and Pirates in existence will be 1,800,000,000 <span _ngcontent-swv-c18="" class="gold">$GGOLD</span>.</p>
                                <p class="title-modal">GOLDMINER</p>
                                <div className="row text-gif">
                                    <img className="text-gif-left" src="https://thegame.gold/assets/gif/1.gif"/>
                                    <span className="text-gif-right"> You have a 90% chance of minting a Goldminer, each with unique traits. Below are the actions they can take. </span>
                                </div>
                                <table className="table-action">
                                    <tr><th className="action-table-th">ACTION</th><th className="action-table-th">NOTES</th><th className="action-table-th">RISK</th></tr>
                                    <tr><th className="action-table-th">Sail to the Island (Stake)</th><th className="action-table-th">Accumulate 10,000 <span class="gold">$GGOLD</span> / day (prorated to the second).</th><th className="action-table-th">No risk.</th></tr>
                                    <tr><th className="action-table-th">Send <span class="gold">$GGOLD</span> to the mainland (Claim)</th><th className="action-table-th">Receive 80% of <span class="gold">$GGOLD</span> accumulated on your Goldminer.</th><th className="action-table-th"> Pirates take a guaranteed 20% fee on sent <span class="gold">$GGOLD</span> in return for not attacking the ship. Taxed <span class="gold">$GGOLD</span> is split among all the Pirates currently staked in the Corsair Fleet. </th></tr>
                                    <tr><th className="action-table-th">Leave the Island (Unstake)</th><th className="action-table-th"> Goldminer is removed from the Island and all <span _ngcontent-swv-c18="" class="gold">$GGOLD</span> is sent to the Mainland. <br/><span style={{textDecoration: "underline"}}>Can only be done if the Goldminer has accumulated 2 days worth of <span class="gold">$GGOLD</span> to pay for theticket to the Mainland.</span></th><th className="action-table-th"> 50% chance of ALL of your accumulated <span class="gold">$GGOLD</span> being stolen by Pirates. Stolen <span class="gold">$GGOLD</span> is split among all the Pirates currently staked in the Corsair Fleet. </th></tr>
                                </table>
                                <p class="title">PIRATE</p>
                                <div className="row text-gif">
                                    <img className="text-gif-left" src="https://thegame.gold/assets/gif/6.gif"/>
                                    <span className="text-gif-right"> You have a 10% chance of minting a Pirate, each with unique traits. Below are the actions they can take. </span>
                                </div>
                                <table className="table-action">
                                    <tr><th className="action-table-th">ACTION</th><th className="action-table-th">NOTES</th><th className="action-table-th">RISK</th></tr>
                                    <tr><th className="action-table-th">Stake Pirate</th><th className="action-table-th">Earn your share of the 20% fee of all <span class="gold">$GGOLD</span>  generated by Goldminer in the Island.</th><th className="action-table-th">No risk.</th></tr>
                                    <tr><th className="action-table-th">Claim  <span class="gold">$GGOLD</span></th><th className="action-table-th">Receive all <span class="gold">$GGOLD</span>  taxes accrued for the staked Pirate.</th><th className="action-table-th">No risk.</th></tr>
                                    <tr><th className="action-table-th">Unstake Pirate</th><th className="action-table-th"> Receive all <span class="gold">$GGOLD</span>  taxes accrued for the staked Pirate.</th><th className="action-table-th">No risk.</th></tr>
                            </table>
                            <p class="title-modal">$GGOLD</p>
                            <div className="row text-gif">
                                    <img className="text-gif-left" src="https://thegame.gold/assets/gif/4.gif"/>
                                    <span className="text-gif-right">The maximum <span _ngcontent-swv-c18="" class="gold">$GGOLD</span> supply is 5,000,000,000: <br/><br/> - When supply reaches 2,400,000,000 <span _ngcontent-swv-c18="" class="gold">$GGOLD</span> earned for staking, the staking “faucet” turns off.<br/> - The developers will receive 600,000,000 <span _ngcontent-swv-c18="" class="gold">$GGOLD</span>.<br/> - Community Rewards will be allocated 2,000,000,000 <span _ngcontent-swv-c18="" class="gold">$GGOLD</span>.</span>
                            </div>
                            <table className="table-action">
                                    <tr><th className="action-table-th">ACTION</th><th className="action-table-th">NOTES</th><th className="action-table-th">RISK</th></tr>
                                    <tr><th className="action-table-th">Mint a new Goldminer using <span _ngcontent-swv-c18="" class="gold">$GGOLD</span></th><th className="action-table-th">There is a 10% chance that the NFT is actually a Pirate!</th><th className="action-table-th">10% chance of the new Goldminer or Pirate being kidnapped by a staked Pirate.</th></tr>
                            </table>
                            <p _ngcontent-swv-c18="" class="title-modal">BRIEF TECH SUMMARY</p>
                            <span _ngcontent-swv-c18=""> Our game combines reliable concepts and mechanics of the on-chain technologies with low gas fee solutions of decentralized storage. Part of the processes such as the decisioning, the results, and the part of metadata run on-chain. And the other parts (other traits and images) are stored on IPFS, protected with InterPlanetary File System technology which has proven itself in such well-known projects as BAYC and CoolCats. Moreover, such a division helps us to keep protocol-level game mechanics and low gas fees, which are crucial for any project now, especially for games. You can always check out our smart contract source code that is available to everyone. </span>
                            <p _ngcontent-swv-c18="" class="title-modal">SECURITY</p>
                                <div className="last-text">
                                    <span> On-chain game development carries some risks to the NFT owners and gamers. Solidity developers know that solidity smart contracts are completely deterministic. Anyone who figures out how your contract produces randomness can anticipate its results and use this information to exploit your application, as it occurred in the case of the famous Wolf Game. </span><br/><br/>
                                    <span> There are a set of common practices to generate a random number in smart contracts, and only 2 approaches are actively used: </span>
                                    <br/><br/>
                                    <span> - Using block variables (like block.timestamp or block.number) with a combination of block hash and secret seed number. Such an approach can be exploited, and there is no guarantee the result is a truly random number. </span>
                                    <br/><br/>
                                    <span> - Using third-party dependencies like Oraclize or Chainlink - it would be 100% random off-chain generation and cannot be exploited. Though it is expected to pay an extra fee for each random number generation. In our game it is used not only on mint transactions, but for stacking and unstacking transactions. The gas fees and the total mint cost will be increased drastically. </span><br/><br/><span> In our approach, we are using a brand-new way to generate a random number and we are nearly positive the exploit risk is almost eliminated. </span><br/><br/><span> The way it is developed is a tricky combination of a common way of using a keccak256 hash function and multiple unpredictable values on the blockchain. There are billions of transactions in the blockchain generated each second, and no one can 100% predict when a certain one will be processed and verified within a certain time. So we use that information based on balances of multiple top Ethereum exchange accounts - and these balances are changing almost every second. </span><br/><br/><span> Hackers cannot predict and calculate that in a certain timestamp, the overall balance of a set of different wallets equals the desired value. However, even these truly unpredictable and hard-to-calculate values are not 100% guarantee that random function will not be exploited. </span><br/><br/><span> Assuming that we have added one more extra security layer to our solution - each random call uses an extra seed number, which is changed by the previous random call. Moreover, this seed number will be randomly changed from time to time, so to figure out a new number is an incredibly difficult task. In summation, we believe that the new multi-layered approach to contract defense excludes the possibility of RNG exploit. </span><br/><br/><span> Another popular exploit is the reentrancy bug. A reentrancy attack occurs when the attacker exploits the targeted contract by recursively calling the target’s functions. When the contract fails to update its state prior to sending funds or minting, the attacker can continuously call the function to drain the contract’s funds or to mint an unlimited number of NFTs. <br/> To prevent this from happening, we reviewed the code several times and improved the quality of the original contract to exclude any possibility of reentrancy exploitation. </span><br/><br/><br/><br/><br/>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="modal-quit-content">
                                <mat-icon role="img" className="mat-icon notranslate close material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">
                                            <img src={Quit} width="40" onClick={() => setShow(false)}/>
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