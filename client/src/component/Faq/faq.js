import React from "react";
import ReactDOM from "react-dom"; 
import './faq.scss';

class AppFaq extends React.Component {

  render() {
    var acc = document.getElementsByClassName("accordion");
    var panel = document.getElementsByClassName("panel");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
          setClasses(acc, 'active', 'remove');
          setClasses(panel, 'show', 'remove');

          if(setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
          }
      }
    }

    return (
      <section className="accordeon">
        <div className="faq_h2 light">
          <h2><span className="color_bleu">Les questions</span> <span className="color_degrade">fréquentes</span></h2> 
        </div>
        <div>
          <button className="accordion">Comment rembourser mon billet ?</button>
          <p className="panel">En cas d'annulation d'une manifestation sans date de report, vous pouvez bien entendu vous faire rembourser vos billets <i>à l'exclusion des frais annexes tels que les frais d'envoi, d'assurrance ou de Billetcollector</i>.  Le remboursement des billets s'effectue dans les conditions suivantes.</p>
        </div>
        <div>
          <button className="accordion">Comment rembourser mon billet ?</button>
          <p className="panel">En cas d'annulation d'une manifestation sans date de report, vous pouvez bien entendu vous faire rembourser vos billets <i>à l'exclusion des frais annexes tels que les frais d'envoi, d'assurrance ou de Billetcollector</i>. Le remboursement des billets s'effectue dans les conditions suivantes.</p>
        </div>
        <div>
          <button className="accordion">Comment rembourser mon billet ?</button>
          <p className="panel">En cas d'annulation d'une manifestation sans date de report, vous pouvez bien entendu vous faire rembourser vos billets <i>à l'exclusion des frais annexes tels que les frais d'envoi, d'assurrance ou de Billetcollector</i>. Le remboursement des billets s'effectue dans les conditions suivantes.</p>
        </div>
        <div>
          <button className="accordion">Comment rembourser mon billet ?</button>
          <p className="panel">En cas d'annulation d'une manifestation sans date de report, vous pouvez bien entendu vous faire rembourser vos billets <i>à l'exclusion des frais annexes tels que les frais d'envoi, d'assurrance ou de Billetcollector</i>. Le remboursement des billets s'effectue dans les conditions suivantes.</p>
        </div>
      </section>
    )
  }
}



export default AppFaq;