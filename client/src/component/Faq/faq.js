import React from "react";
import ReactDOM from "react-dom"; 
import './faq.scss';

class AppFaq extends React.Component {

  render() {

    return (
      <>
      <div>
        <h1 className="text-center p-5">Information F.A.Q</h1>
      </div>
      <section className="accordeon">
        <div className="faq_h2 light">
          <h2><span className="color_bleu">Les questions</span> <span className="color_degrade">fréquentes</span></h2> 
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingOne"><button className="accord accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Comment rembourser mon billet ?</button></h3>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className="panel">En cas d'annulation d'une manifestation sans date de report, vous pouvez bien entendu vous faire rembourser vos billets <i>à l'exclusion des frais annexes tels que les frais d'envoi, d'assurrance ou de Billetcollector</i>.  Le remboursement des billets s'effectue dans les conditions suivantes.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingTwo"><button className="accord accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Comment rembourser mon billet ?</button></h3>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className="panel">En cas d'annulation d'une manifestation sans date de report, vous pouvez bien entendu vous faire rembourser vos billets <i>à l'exclusion des frais annexes tels que les frais d'envoi, d'assurrance ou de Billetcollector</i>.  Le remboursement des billets s'effectue dans les conditions suivantes.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingThree"><button className="accord accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Comment rembourser mon billet ?</button></h3>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className="panel">En cas d'annulation d'une manifestation sans date de report, vous pouvez bien entendu vous faire rembourser vos billets <i>à l'exclusion des frais annexes tels que les frais d'envoi, d'assurrance ou de Billetcollector</i>.  Le remboursement des billets s'effectue dans les conditions suivantes.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header" id="headingFour"><button className="accord accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Comment rembourser mon billet ?</button></h3>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className="panel">En cas d'annulation d'une manifestation sans date de report, vous pouvez bien entendu vous faire rembourser vos billets <i>à l'exclusion des frais annexes tels que les frais d'envoi, d'assurrance ou de Billetcollector</i>.  Le remboursement des billets s'effectue dans les conditions suivantes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
  }
}



export default AppFaq;