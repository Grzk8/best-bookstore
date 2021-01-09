import React, {Component} from 'react';
import Nav from '../../Navigation/Navigation';

class DeliveryCost extends Component {
    render(
    ) {
        return <>
                <h1 className="headerStyle">Koszty dostawy</h1>
                <p className="headerStyle">Jeśli wartość twojego zamówienia przekracza 200 zł, nie płacisz za dostawę :-)</p>

                    <div className="tableContainer">
                        <table>
                            <thead>
                                <tr>
                                    <td>WYSTŁKA</td>
                                    <td>WARTOŚĆ</td>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Poczta Polska - odbiór w punkcie</td>
                                    <td>7,99 zł</td>

                                </tr>
                                <tr>
                                    <td>Poczta Polska - doręczenie do Klienta</td>
                                    <td>8,99 zł</td>

                                </tr>
                                <tr>
                                    <td>Paczka w RUCHu</td>
                                    <td>7,99 zł</td>

                                </tr>
                                <tr>
                                    <td>Kurier Pocztex - doręczenie do Klienta</td>
                                    <td>11,99 zł</td>

                                </tr>
                                <tr>
                                    <td>Kurier DPD - doręczenie do Klienta</td>
                                    <td>11,99 zł</td>

                                </tr>
                                <tr>
                                    <td>Paczkomaty InPost</td>
                                    <td>10,99 zł</td>

                                </tr>
                                <tr>
                                    <td>Odbiór osobisty w punkcie odbioru</td>
                                    <td>GRATIS</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
        </>;
    }
}

export default DeliveryCost;