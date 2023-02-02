import React from 'react';

const AboutUs = () => {

    return <div className="booksImage" >
        <h1 className="about-header">Jesteśmy nową na rynku, <br></br>lecz prężnie rozwijającą się księgarnią.</h1>
        <p className='about-text'>Stale zwiększamy swój asortyment abyś zawsze mógł znaleźć coś dla siebie. <br></br> 
        Tworzymy dobrze zorganizowany zespół, który zaangażowaniem i energią w każdym dniu sprawia,<br></br> że księgarnia wysyłkowa buduje dobrą renomę</p>
        

        <div>
            <h2 className="about-header">Kontakt</h2>
            <h3 className="about-text">Dział Obsługi Klienta</h3>
            <p className="about-text">745-972-655-980 <i>(linia czynna od poniedziałku do piątku w godzinach 8.00–20.00)</i></p>
            <h3 className="about-text">Napisz do nas</h3>
            <p className="about-text">BestBooKStore@BestBooKStore.pl</p>
        </div>
    </div>;
};

export default AboutUs;