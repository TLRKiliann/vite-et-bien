import mainBread from '../assets/images/bread_title.png';
import mapShot from '../assets/images/map_shot.png';
import croissImg from '../assets/images/croissant.jpg';
import '../StylePages/Contact.css';


export const Contact = () => {
  return (
    <div className="main--contact">
      
      <div className="submain--contact">
        <div className="div--titlecontact">
          <h1>
            Contact
          </h1>
          <div className="bg_mainbreadcontact">
            <img 
              src={mainBread} 
              width="800px"
              height="700px"
              alt='no bg for title' />
          </div>

          <div className="div--mapaddcontact">
            <div className="map--shot">
              <img
                src={mapShot}
                width="600px"
                height="360px"
                alt="no map" />
            </div>

            <div className="div--articlecontact">

              <div className="div--croissant">
                <img
                  src={croissImg}
                  width="450px"
                  height="328px"
                  alt="no croissant" />
              </div>

              <article className="art--h4p">
                <h4 className="names--proprio">
                  Esteban & Celestine
                </h4>
                <p className="address--data">Phone: 033 323 34 33</p>
                <p className="address--data">Street: StreetFake 23</p>
                <p className="address--data">City: 10234 New-Orleans</p>
                <p className="address--data">Country: France</p>
                <p className="address--data">Mail: esteban.celestine@mail.com</p>
                
              </article>
            </div>
          </div>
        
        </div>

      </div>
    </div>
  )
};
