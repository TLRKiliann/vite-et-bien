import React from 'react';
import { BiTime } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';
import mainBread from '../assets/images/bread_title.png';
//import baguette from '../assets/images/baguette.png';
import '../StyleComponents/Commandes.css';

export const Commandes = () => {
  return (
    <div className="main--commandes">
      
      <div className="submain--commandes">

        <div className="div--titlecommandes">

          <div className="bg_mainbreadcmd">
            <img 
              src={mainBread} 
              width="800px"
              height="760px"
              alt='no bg for title' />
          </div>

          <h1>Commandes</h1>

          <div className="delivery">
            <h2 className="delais">
              Délais
              <BiTime size={38} style={{
                marginLeft: '10px'}} /></h2>
            <article className="delais--art">
              <p>
                Notre clientèle est priée de
                passer commande au plus tard
                24h à l'avance.
              </p>
            </article>

            <h2 className="livraison">
              Livraison
              <TbTruckDelivery size={38} style={{
                marginLeft: '10px'}} /></h2>
            <article className="livraison--art">
              <p style={{marginTop: '10px'}}>
                Nos livraisons ne peuvent se faire
                au-delà d'un périmètre de max 10km.
              </p>
              <p style={{fontSize: '1.0rem', color: 'dimgrey'}}>
                (<i>montant minimum 20.-</i>)
              </p>
            </article>
          </div>


          <div style={{paddingTop: "20px", paddingBottom: "20px"}}>
            <h2>Faites votre Choix !</h2>
          </div>

          <div className="form--div">

            <form className="form">
          
              <div className="div--labinput">
                <label>Prenom :</label>
                <input type='text' placeholder="Prenom" />
              </div>
              <div className="div--labinput">  
                <label>Nom :</label>
                <input type='text' placeholder="Nom" />
              </div>

              <div className="div--labinput">  
                <label>E-mail :</label>
                <input type='email' placeholder="votre.email@mail.com" />
              </div>

              <div className="wrap--select">
                <label htmlFor="pains" className="label--cmd">Nos pains :</label>

                <select name="pains" id="pains">
                  <option value="campagne">Pain Campagnard</option>
                  <option value="olive">Pain aux Olives</option>
                  <option value="maison">Pain Maison</option>
                  <option value="paillaisse">Pain Paillasse</option>
                  <option value="noix">Pain aux Noix</option>
                </select> 
              </div>

              <div className="wrap--select">
                <label htmlFor="patiss" className="label--cmd">Nos Pâtisseries :</label>

                <select name="patiss" id="patiss">
                  <option value="croiss">Croissants</option>
                  <option value="amende">Croissants aux Amendes</option>
                  <option value="choc">Pain au Chocolat</option>
                  <option value="raisin">Escargot aux Raisins</option>
                  <option value="cerise">Gâteau au Cerises</option>
                  <option value="tourte">Tourte Glacée</option>
                  <option value="foret">Forêt Noir</option>
                  <option value="gatchoc">Gâteau au Chocolat</option>
                  <option value="banana">Gâteau à la Bannane</option>
                </select> 
              </div>

              <div className="wrap--select">
                <label htmlFor="assort" className="label--cmd">Nos Spécialités :</label>

                <select name="assort" id="assort">
                  <option value="assortiment">Plateau d'Assortiments</option>
                  <option value="confis">Plateau du Confiseur</option>
                  <option value="platchoc">Plateau du Chocolatier</option>
                  <option value="confischoix">Confiseries au Choix</option>
                </select> 
              </div>

              <button className="btn--cmd">
                Envoyer
              </button>

            </form>

          </div>

            <div className="interstice--cmd">
            </div>

        </div>
      </div>
    </div>
  )
}