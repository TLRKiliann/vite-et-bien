import React from 'react';
import { BiTime } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';
import mainBread from '../assets/images/bread_title.png';
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
              height="700px"
              alt='no bg for title' />
          </div>

          <h1>Commandes</h1>

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
            <p>
              Nos livraisons ne peuvent se faire
              au-delà d'un périmètre de max 10km.
            </p>
          </article>  

          <form className="form">
            <div className="div--labinput">
              <label>Nom d'utilisateur</label>
              <input type='text' placeholder="Username" />
            </div>
            <div className="div--labinput">  
              <label>Mot de passe</label>
              <input type='password' placeholder="Password" />
            </div>
          </form>
        
        </div>
      </div>
    </div>
  )
}