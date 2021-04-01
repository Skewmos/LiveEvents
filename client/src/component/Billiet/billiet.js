import './billiet.scss';

import imgBilliet from "../../images/billet.svg";

const Billiet = () => {
    return (
        <>
           <div className="container mt-5">
               <div className="row">
                   <div className="col-md-6">

                       <h4>Réservez vos <span className="color_degrade">billiets</span></h4>
                       <p>Chaque année depuis 3 ans, la société d’évènementiel « Live Events » organise un festival de musique appelé « Nation Sounds » dans la région parisienne afin de récolter des fonds pour une association humanitaire. Plusieurs centaines de milliers de personnes sont attendues sur le site du festival.</p>
                       <button className="btn btnprimary">Accédez à la billetterie</button>
                   </div>
                   <div className="col-md-4">
                       <img src={imgBilliet} alt="Liveevents billiet" className="billietimg"/>
                   </div>
               </div>
           </div>
        </>
    );
}
export default Billiet;