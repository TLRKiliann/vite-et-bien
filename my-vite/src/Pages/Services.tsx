import React from 'react';
import mainBread from '../assets/images/bread_title.png';
import '../StylePages/Services.css';
import painChoc from '../assets/images/pain_choc.png';
import croissant from '../assets/images/croissant.jpg';
import croissantAmendes from '../assets/images/croissant_2.jpeg';
import patissImg from '../assets/images/patisseries.jpg';
import patissImg2 from '../assets/images/patisserie_2.jpg';
import patissImg3 from '../assets/images/patisserie_3.jpg';
import blackforest from '../assets/images/foret_noir.jpg';
import chocGat from '../assets/images/gateau_choc.jpg';
import plateau from '../assets/images/plateau.jpg';
import littlecake from '../assets/images/petits_gateau.jpg'
import pepito from '../assets/images/gateau_pepites.jpg'


export const Services = () => {
  return (
    <div className="main--service">
      
      <div className="submain--service">
        <div className="div--titleservice">
          <h1>
            Services
          </h1>
          <div className="bg_mainbreadservice">
            <img 
              src={mainBread} 
              width="800px"
              height="760px"
              alt='no bg for title' />
          </div>

          <h2 className="subtitle--serv">Nos Croissants</h2>

          <div className="main--imgserv">
            <div className="submain--imgserv">
              <img
                src={painChoc}
                width="200px"
                height="200px"
                alt="no patisserie" />
              <legend>Pain au Chocolat</legend>
            </div>

            <div className="submain--imgserv">
              <img
                src={croissant}
                width="300px"
                height="200px"
                alt="no patisserie" />
              <legend>Croissants</legend>
            </div>

            <div className="submain--imgserv">
              <img
                src={croissantAmendes}
                width="200px"
                height="200px"
                alt="no patisserie" />
              <legend>Croissants aux amendes</legend>
            </div>
          </div>

          <h2 className="subtitle--serv">Nos Pâtisseries</h2>

          <div className="main--imgserv">
            <div className="submain--imgserv">
              <img
                src={patissImg}
                width="280px"
                height="200px"
                alt="no patisserie" />
              <legend>Confiseries et autres</legend>
            </div>

            <div className="submain--imgserv">
              <img
                src={patissImg2}
                width="330px"
                height="200px"
                alt="no patisserie" />
              <legend>Nos éclairs aux divers Parfums</legend>
            </div>

            <div className="submain--imgserv">
              <img
                src={littlecake}
                width="210px"
                height="200px"
                alt="no patisserie" />
              <legend>Diverses Pâtisseries</legend>
            </div>
          </div>

          <h2 className="subtitle--serv">Nos Spécialités</h2>

          <div className="main--imgserv">
            <div className="submain--imgserv">
              <img
                src={patissImg3}
                width="400px"
                height="200px"
                alt="no patisserie" />
              <legend>Diverses Pâtisseries</legend>
            </div>

            <div className="submain--imgserv">
              <img
                src={plateau}
                width="400px"
                height="200px"
                alt="no patisserie" />
              <legend>Arrangement aux Choix</legend>
            </div>
          </div>

          <h2 className="subtitle--serv">Nos Gâteaux</h2>

          <div className="main--imgserv">
            <div className="submain--imgserv">
              <img
                src={blackforest}
                width="400px"
                height="200px"
                alt="no patisserie" />
              <legend>Forêt Noir</legend>
            </div>

            <div className="submain--imgserv">
              <img
                src={pepito}
                width="300px"
                height="200px"
                alt="no patisserie" />
              <legend>Cake aux Pépites de Choc</legend>
            </div>
          </div>


        </div>
      </div>


    </div>
  )
};
