import React from 'react';
import Logo from '../../Layout/Logo/Logo';

const footer = () => {
    
    let fontSize = null;
    var crit = "(max-width: 700px)";
    let mobile = window.matchMedia(crit).matches

    if (mobile) {
        fontSize = '1em'
    } else {
        fontSize = '2em'
    };

    return (
        <div className="footerMain">
            <div className="footerMain_container">
                <div className="rights">
                    <Logo fontSize={fontSize} />
                    <p className="bestbookstoreRights">2022 BestBooKStore <br />created by Grzegorz Kaczor</p>
                </div>
                <div className="media">
                    <div><a className="mediaLogo facebook" href="https://twitter.com"></a></div>
                    <div><a className="mediaLogo tweeter" href="https://facebook.com"></a></div>
                </div>
            </div>
        </div>
    );
};

export default footer;