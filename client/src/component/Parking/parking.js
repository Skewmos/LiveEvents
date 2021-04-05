import React from "react";
import ReactDOM from "react-dom"; 
import './parking.scss';

class Parking extends React.Component {

    render() {

        return (
        <>
            <div>
                <h1 className="text-center p-5">Parking</h1>
            </div>
            <section className="parking d-flex">
                <div className="park col-6 row">
                    <div className="sous-titre">
                        <h2>Nation Sounds 2021 : Le <span className="color_degrade">Parking</span></h2>
                    </div>
                    <div className="paragraphe">
                        <p>Un parking payant à proximité du camping est mis à la<br/>disposition des festivaliers.<br/><br/>Le Parking vous donne accès à un parking plus proche, avec un<br/>accès au festival plus aisé en évitant la passerelle.<br/>Evitez les longues distances de marche en optant pour cette<br/>nouvelle formule.<br/><br/>Vous pouvez acheter en prévente votre ticket Parking.<br/>Ce ticket coûte 25€ et devront être échangés sur place à<br/>l’entrée du Parking.<br/>Le ticket ne comprend pas le ticket d’entrée pour le festival.<br/><br/>Attention : tout véhicule stationné en dehors du parking risque<br/>une mise en fourrière immédiate.<br/></p> 
                    </div>
                    <form>
                        <input  type="button" value="RESERVER MAINTENANT"/>
                    </form> 
                </div>

                <div className="col-6 d-flex">
                    <div class="rectangle row">
                        <table>
                            <h3>HORAIRES</h3>

                            <thead>
                                <tr>
                                    <th>Jeudi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Jour</th>
                                    <th>Nuit</th>
                                    </tr>
                                <tr>
                                    <td>8h00 a 21h00</td>
                                    <td>23h00 a 6h00</td>
                                </tr> 
                            </tbody>
                            
                            <thead>
                                <tr>
                                    <th>Vendredi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Jour</th>
                                    <th>Nuit</th>
                                </tr>
                                <tr>
                                    <td>8h00 a 21h00</td>
                                    <td>23h00 a 6h00</td>
                                </tr>
                            </tbody>

                            <thead>
                                <tr>
                                    <th>Samedi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Jour</th>
                                    <th>Nuit</th>
                                </tr>
                                <tr>
                                    <td>8h00 a 21h00</td>
                                    <td>23h00 a 8h00</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </section>
        </>
        )
    }
}



export default Parking;