import React, { useState } from 'react';

const SelfPickup = () => {
    const [isLoading, setIsLoading] = useState(true);

    const hideSpinner = () => {
        setIsLoading(false);
    };

    return <>
        <p className="headerStyle">Księgarnia  oprócz sprzedaży wysyłkowej oferuje również możliwość bezpłatnego odbioru zamówień we własnych Punktach odbioru zamówień: </p>

        <p className="headerStyle">Warszawa ul. Słoneczna 2</p>

        {isLoading && <div className="loader">Loading...</div>}
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe width="300" height="300" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=warszawa%2C%20sloneczna&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" onLoad={hideSpinner}></iframe>
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div>
        </div>

        <p className="headerStyle">Kraków ul. Długa 76A</p>

        {isLoading && <div className="loader">Loading...</div>}
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe width="300" height="300" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=krakow%2C%20dluga&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" onLoad={hideSpinner}></iframe>
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div>
        </div>

        <p className="headerStyle">Wrocław ul. Piękna 14/58</p>

        {isLoading && <div className="loader">Loading...</div>}
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe width="300" height="300" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=warszawa%2C%20sloneczna&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" onLoad={hideSpinner}></iframe>
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div>
        </div>

        <p className="headerStyle">Gdańsk ul. Totuńska 4</p>

        {isLoading && <div className="loader">Loading...</div>}
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe width="300" height="300" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=gdansk%2C%20toru%C5%84ska&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" onLoad={hideSpinner}></iframe>
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div>
        </div>
    </>;
};

export default SelfPickup;