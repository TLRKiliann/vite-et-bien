import '../StylePages/Home.css';
import mainBread from '../assets/images/bread_title.png';
import firstBread from '../assets/images/main_bread.jpg';
import cake from '../assets/images/cake.jpg';
import superBread from '../assets/images/super_bread.png';


export const Home = () => {
  return (
    <div className="main--home">
      
      <div className="submain--home">

        <div className="div--titlehome">

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


      <div className="mainnav--home">
          <h4>Un titre</h4>
        <div className="submainnav--home">
          <nav className="nav--home">
            <ul>
              <li>
                Pains
              </li>
              <li>
                Pâtisseries
              </li>
              <li>
                Gâteaux
              </li>
              <li>
                Commandes
              </li>
            </ul>
          </nav>
        </div>
      </div>


      <div className="div--breadhome">
        <div className="div--subbreadhome">
          <img
            src={firstBread}
            width='550px'
            height='380px'
            alt='img main breed' />
        </div>

        <div className="div--artfirst">
          <article className="art--firsthome">
            <h1>
              Bienvenue chez Esteban & Celestine !
            </h1>
            <section>
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
          <h1>Le meilleur pain c'est chez nous.
            C'est maintenant qu'il faut venir !
          </h1>
          <section>
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
            <h1>Le meilleur pain c'est chez nous.
              C'est maintenant qu'il faut venir !
            </h1>
            <section>
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
            width='550px'
            height='600px'
            src={cake}
            alt='img cake'
          />
        </div>

      </div>

      <footer>
        <div className="divfooter--home">
          <nav className="divfooter--nav">
            <ul>
              <li>Commandes</li>
              <li>Allergies</li>
              <li>Liens utiles</li>
              <li>Contact</li>
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