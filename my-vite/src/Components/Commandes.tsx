import { BiTime } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';
import mainBread from '../assets/images/bread_title.png';
import '../StyleComponents/Commandes.css';

export const Commandes = () => {
  return (
    <div className="main--commandes">
      
      <div className="submain--commandes">

        <div className="div--titlecommandes">

          <h1>Commandes</h1>

          <h2 className="delais">Délais</h2>
          <article className="delais--art">
            <p>
              Notre clientèle est priée de
              passer commande au plus tard
              24h à l'avance.<BiTime size={32} style={{marginTop: '-10px',
              marginLeft: '5px'}} />
            </p>
          </article>
          
          <h2 className="livraison">Livraison</h2>
          <article className="livraison--art">
            <p>
              Nos livraisons ne peuvent se faire
              au-delà d'un périmètre de max 10km.
              <TbTruckDelivery size={32} style={{marginTop: '-6px',
              marginLeft: '5px'}} />
            </p>
          </article>  

          <div className="bg_mainbreadcmd">
            <img 
              src={mainBread} 
              width="800px"
              height="700px"
              alt='no bg for title' />
          </div>
        
        </div>
      </div>
    </div>
  )
}