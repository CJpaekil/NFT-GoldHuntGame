import React from 'react'
// import AccountBalance from '../components/AccountBalance';
// import Footer from '../components/layout/Footer';
// import Navbar from "../components/layout/Navbar";
import ListOfStakes from '../components/ListOfStakes';
import TotalMarketInfo from '../components/TotalMarketInfo/index';

export default function coin() {
    return (
        <React.Fragment>
            <div>
                <div>
                    <div>
                        <div>
                            <TotalMarketInfo />
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <ListOfStakes />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
