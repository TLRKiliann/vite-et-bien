import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import mainBread from '../assets/images/bread_title.png';
import firstBread from '../assets/images/main_bread.jpg';
import cake from '../assets/images/cake.jpg';
import superBread from '../assets/images/super_bread.png';
import stackBread from '../assets/images/ness.png';
import cakeImg from '../assets/images/cake.png';
import gatLogo from '../assets/images/gateau_logo.png';
import clickMe from '../assets/images/fig_bakery.png';
import '../StylePages/Home.css';


export const Home = () => {
  const [command, setCommand] = useState<boolean>(false);
  const [afterClickMe, setAfterClickMe] = useState<boolean>(false);
  
  const handleCommand = () => {
    setCommand(!command);
  };

  const handlePanelCmd = () => {
    setAfterClickMe(!afterClickMe);
  };

  return (
    <div className="main--home">
      
      <div className="submain--home">

        <div className="div--titlecontact">

          <div className="bg_mainbread">
            <img 
              src={mainBread} 
              width="800px"
              height="700px"
              alt='no bg for title' />
          </div>

          <div className="div--homeh1">
            <h1>Esteban</h1>

            <img
              src={mainBread}
              width="240px"
              height="140px"
              alt='img mainBread'
            />

            <h1>Celestine</h1>

          </div>
        
        </div>

      </div>


      {afterClickMe ? (
        <div className="mainnav--home">
            <h4>Commandes</h4>
          <div className="submainnav--home">
            <nav className="nav--home">
              <ul>
                <div className="limg--cmd">
                  <li className="list--cmd">
                    <a>Boulangerie</a>
                    <img
                      src={superBread}
                      width="25px"
                      height="25px"
                      alt="icon pain"
                    />
                  </li>
                </div>
                <div className="limg--cmd">
                  <li className="list--cmd">
                    <a>Gênoisieries</a>
                    <img
                      src={cakeImg}
                      width="25px"
                      height="25px"
                      alt="icon pain"
                    />
                  </li>
                </div>
                <div className="limg--cmd">
                  <li className="list--cmd">
                    <a>Pâtisseries</a>
                    <img
                      src={gatLogo}
                      width="30px"
                      height="30px"
                      alt="icon pain"
                    />
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
        ) : null
      }

      <div className="div--breadhome">

        <div className="div--subbreadhome">
          <img
            src={firstBread}
            width='550px'
            height='390px'
            style={{margin: 'auto', padding: 'auto'}}
            alt='img main breed' />
        </div>

        <div className="div--artfirst">
          <article className="art--firsthome">
            <section>
              <h1>
                Bienvenue chez Esteban & Celestine !
              </h1>
              <p>La fabrication de notre pain se perpétue au travers des 
                traditions ancestrales, tenue de génération en génération
                par notre famille. L'épautre et le blé sont les clefs de
                nos recettes pour servir à notre clientèle les meilleurs
                produits.
              </p>
              <p>
                Les artisants de notre boulangerie sont compétents et à
                l'écoute de notre clientèle. Nous sommes à votre service
                depuis 20 ans.  
              </p>
              <p>
                Nous restons à disposition pour toute demande.
              </p>
            </section>
          </article>
        </div>

      </div>


      <div className="div--artfirst">
        <article className="art--firsthome">
          <section>
            <h1>Le meilleur pain c'est chez nous.
              C'est maintenant qu'il faut venir !
            </h1>
            <p>La fabrication de notre pain se perpétue au travers des 
              traditions ancestrales, tenue de génération en génération
              par notre famille. L'épautre et le blé sont les clefs de
              nos recettes pour servir à notre clientèle les meilleurs
              produits.
            </p>
            <p>
              Les artisants de notre boulangerie sont compétents et à
              l'écoute de notre clientèle. Nous sommes à votre service
              depuis 20 ans.  
            </p> 
          </section>
        </article>
      </div>


      <div className="div--cake">

        <div className="div--subcake">
          <article className="art--third">
            <section>
              <h1>Le meilleur pain c'est chez nous.
                C'est maintenant qu'il faut venir !
              </h1>
              <p>La fabrication de notre pain se perpétue au travers des 
                traditions ancestrales, tenue de génération en génération
                par notre famille. L'épautre et le blé sont les clefs de
                nos recettes pour servir à notre clientèle les meilleurs
                produits.
              </p>
              <p>
                Les artisants de notre boulangerie sont compétents et à
                l'écoute de notre clientèle. Nous sommes à votre service
                depuis 20 ans.  
              </p> 
              <p>La fabrication de notre pain se perpétue au travers des 
                traditions ancestrales, tenue de génération en génération
                par notre famille. L'épautre et le blé sont les clefs de
                nos recettes pour servir à notre clientèle les meilleurs
                produits.
              </p>
              <p>
                Les artisants de notre boulangerie sont compétents et à
                l'écoute de notre clientèle. Nous sommes à votre service
                depuis 20 ans.  
              </p> 
            </section>
          </article>
        </div>

        <div className="div--cakeimg">

          <img
            className="img--cake"
            width='450px'
            height='500px'
            src={cake}
            alt='img cake'
          />
        </div>

      </div>

      <div className="div--artfirst">
        <article className="art--firsthome">
          <section>
            <h1>Le meilleur pain c'est chez nous.
              C'est maintenant qu'il faut venir !
            </h1>
            <p>La fabrication de notre pain se perpétue au travers des 
              traditions ancestrales, tenue de génération en génération
              par notre famille. L'épautre et le blé sont les clefs de
              nos recettes pour servir à notre clientèle les meilleurs
              produits.
            </p>
            <p>
              Les artisants de notre boulangerie sont compétents et à
              l'écoute de notre clientèle. Nous sommes à votre service
              depuis 20 ans.  
            </p> 
          </section>
        </article>
      </div>

      <div className="div--finalhome">

        <div className="div--sublasthome">
          <img
            src={stackBread}
            width='570px'
            height='390px'
            alt='img main breed' />
        </div>

        <div className="div--artfirst">
          <article className="art--firsthome">
            <section>
              <h1>
                Nous confectionons vos désirs sur commandes
              </h1>
              <p>Nos artisants sont au service de notre clientèle. Leur compétences
                leur permettent de réaliser tous les désirs de notre clientèle, y compris
                les rêves les plus fous et les plus origiaux.
              </p>
              <p>
                Les artisants de notre boulangerie sont compétents et à
                l'écoute de notre clientèle. Nous sommes à votre service
                depuis 20 ans.  
              </p>
              <p>
                Nous restons par conséquent à votre disposition pour vos commandes.
              </p>
            </section>
          </article>
        </div>

      </div>

      {command ? (
        <div className="click--me" onClick={handlePanelCmd}>
          <div className="subclick--me">
            <img
              src={clickMe}
              className="click--img"
              alt="no img click-me"
            />
          </div>
        </div>
      ) : null}

      <footer>

        <div className="divfooter--home">
          <nav className="divfooter--nav">
            <ul>
              <li
                onClick={handleCommand}
              >
                <Link
                  className="tocolor--letter"
                  to="/commandes"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    color: 'white',
                    '&:hover': {
                    color: 'orange',
                    }
                  }}>
                  Commandes
                </Link>
              </li>
              <li>
                <Link
                  className="tocolor--letter"
                  to="/allergies"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    color: 'white'
                  }}>
                  Allergies
                </Link>
              </li>
              <li>
                <Link
                  className="tocolor--letter"
                  to="/contact"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    color: 'white'
                  }}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="div--iconshome">
            <img
              className="img--iconhome"
              src={superBread}
              width="30px"
              height="30px"
              alt="icons" />
          </div>
        </div>

      </footer>

    </div>
  )
};