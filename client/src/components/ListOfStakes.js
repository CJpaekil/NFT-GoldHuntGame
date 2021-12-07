import React, { useState } from 'react'
import { useCallback } from 'react'

//to connect metamask
import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/connectors"
//to connect Walletconnect
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
//to connect Coinbase, Fortmatic, Fortmatic, portis wallet
// import { WalletLinkConnector } from '@web3-react/walletlink-connector'

import slogo from "../assets/images/icons/logo.png";
import metamask from "../assets/images/icons/metamask-icon.svg";
import coin from "../assets/images/icons/coin-base.jpg";
import fortmatic from "../assets/images/icons/fortmatic-icon.svg";
import wallet from "../assets/images/icons/wallet-icon.svg";

export default function ListOfStakes() {
   const [counter, setCounter] = useState(1);
   const { active, account, library, connector, activate, deactivate } = useWeb3React();
   const handleConnectMetamaskWallet = () => {
      try {
         activate(injected);
       } catch (ex) {
         console.log(ex);
       }
  }

const handleConnectWalletConnect = useCallback(() => {
           const bridgeUrl = "https://bridge.walletconnect.org";
   
           // Create a connector
           const connector = new WalletConnect({
             bridge: "https://bridge.walletconnect.org", // Required
             qrcodeModal: QRCodeModal,
           });
           // Check if connection is already established
           if (!connector.connected) {
               // create new session
               
               connector.createSession({chainId: 56});
               
           }
           
           connector.on("connect", handleQRCode.bind(this, bridgeUrl));
       }, []);
   
       const handleQRCode = (bridgeUrl, error, payload) => {
   
           if (error) {
             throw error;
           }
           console.log("Event: ", payload.event);
           console.log('aa', payload)
           console.log('bb', payload.params[0])
           // setAccountAddress(payload.params[0].accounts[0]);
           // setTrustConnect(payload.event)
   
           // Get provided accounts and chainId
           // const { accounts, chainId } = payload.params[0];
         
           // Draft transaction
           // const tx = {
           //   from: accounts, // Required
           //   to: "0xf5A07f885B9C2BC30e3766F5727E05bCE8b2B549", // Required (for non contract deployments)
           //   data: "0x", // Required
           //   gasPrice: "0x02540be400", // Optional
           //   gas: "0x9c40", // Optional
           //   value: "0x00", // Optional
           //   nonce: "0x0114" // Optional
           // };
         
           // Send transaction
           /*connector
             .sendTransaction(tx)
             .then((result) => {
               // Returns transaction id (hash)
               console.log(result);
             })
             .catch((error) => {
               // Error returned when rejected
               console.error(error);
             });
         */
       }
       
       const handleConnectFortmatic = () => {
         // try {
         //    activate(WalletLinkConnector.Fortmatic);
         //  } catch (ex) {
         //    console.log(ex);
         //  }
     }
     const handleConnectPortis = () => {
      // try {
      //    activate(WalletLinkConnector.Portis);
      //  } catch (ex) {
      //    console.log(ex);
      //  }
  }
   return (
      <React.Fragment>
         

         {/* Modal */}
         <div class="modal fade" id="connectWallet" tabindex="-1" aria-labelledby="connectWallet" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content gray-bg">
                  <div class="modal-body popup-card-container rel">
                     <button type="button" class="closebtn" data-bs-dismiss="modal" aria-label="Close" style={{ right: "15px" }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10.0001 8.82227L14.1251 4.69727L15.3034 5.8756L11.1784 10.0006L15.3034 14.1256L14.1251 15.3039L10.0001 11.1789L5.87511 15.3039L4.69678 14.1256L8.82178 10.0006L4.69678 5.8756L5.87511 4.69727L10.0001 8.82227Z" fill="black" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Connect to wallet</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12">
                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={metamask} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }} onClick={ handleConnectMetamaskWallet }>Metamask</div>
                                    </div>
                                    
                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={wallet} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }} onClick={ handleConnectWalletConnect }>WalletConnect</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={coin} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }} onClick={ handleConnectFortmatic }>Coinbase</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={fortmatic} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }} onClick={ handleConnectPortis }>Fortmatic</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={metamask} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }}>Portis</div>
                                    </div>
                                 </div>

                                 <div className="col-sm-12">
                                    <div className="connect-wallet-popup text-center">
                                       <small><p>New to Ethereum? <a href="#" className="click-btn"> Learn more about Liquid Lunch</a> </p></small>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}

         <div class="modal fade" id="claimCoinPopup" tabindex="-1" aria-labelledby="claimCoinPopup" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-body popup-card-container rel">
                     <button type="button" class="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Claim</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool reward</small></div>
                                    <div><small>1.14005 URUS</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Penalty Pool reward</small></div>
                                    <div><small>Balance: 1.14005 URUS</small></div>
                                 </div>
                                 <div className="col-sm-12">
                                    <div className="p-2 stake-btn">
                                       <button type="button" className="table-btn btn py-2 px-4 w-100 mb-3">Claim</button>
                                       <div className="claim-btn-failed color5 py-2 px-4 w-100 text-center"><b>Transcation failed</b></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}

         <div class="modal fade" id="cancelStake" tabindex="-1" aria-labelledby="cancelStake" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-body popup-card-container rel">
                     <button type="button" class="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Stake Settings</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool reward</small></div>
                                    <div><small>1.14005 URUS</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Stake</small></div>
                                    <div><small>Balance: 1.14005 URUS</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Penalty Pool reward</small></div>
                                    <div><small>Balance: 1.14005 URUS</small></div>
                                 </div>
                                 <div className="col-sm-12">
                                    <div className="p-2 stake-btn">
                                       <button type="button" className="table-btn color5 py-2 px-4 w-100 mb-3">Cancel Stake</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </React.Fragment>
   )
}

