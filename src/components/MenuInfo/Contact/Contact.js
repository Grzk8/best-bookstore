import React, {Component} from 'react';
import Nav from '../../Navigation/Navigation';

class Contact extends Component {
    render(
    ) {
        return <>
                <div>
                    <h1 className="headerStyle">Kontakt</h1>
                    <h2 className="headerStyle">Dział Obsługi Klienta</h2>
                    <p className="headerStyle">745-972-655-980 <i>(linia czynna od poniedziałku do piątku w godzinach 8.00–20.00)</i></p>
                    <h2 className="headerStyle">Napisz do nas</h2>
                    <p className="headerStyle">BestBooKStore@BestBooKStore.pl</p>
                </div>
        </>;
    }
}

export default Contact;