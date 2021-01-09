import React from 'react';
import Logo from '../../Logo/Logo';

const footer = () => {
    return (
        <div className="footerMain">
            <div className="rights">
            <Logo fontSize={'2em'}/>
                <div className="bestbookstoreRights">2019 BestBooKStore sp z o.o. All rights reserved</div>
            </div>
            <div className="media">
                <a className="mediaLogo facebook" href="https://twitter.com"></a>
                <a className="mediaLogo tweeter" href="https://facebook.com"></a>
            </div>
        </div>
    );
};

export default footer;