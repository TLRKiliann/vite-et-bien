import mainBread from '../assets/images/bread_title.png';
import '../StyleComponents/Allergies.css';


export const Allergies = () => {
  return (
    <div className="main--allergies">
      
      <div className="submain--allergies">

        <div className="div--titleallergies">
          <h1>Allergies</h1>

          <h2 className="lactose">Lactose</h2>
          <article className="lactose--art">
            <p>
              Gluten is a structural protein naturally found
              in certain cereal grains. Although, strictly 
              speaking, "gluten" only refers to wheat proteins, 
              in medical literature it refers to the combination 
              of prolamin and glutelin proteins naturally 
              occurring in all grains that have been proved 
              capable of triggering celiac disease. These 
              include any species of wheat (such as common wheat, 
              durum, spelt, khorasan, emmer and einkorn), barley,
              rye and some oat cultivars, as well as any cross 
              hybrids of these grains (such as triticale).
              Gluten makes up 75–85% of the total protein in 
              bread wheat.
            </p>
          </article>
          
          <h2 className="gluten">Gluten</h2>
          <article className="gluten--art">
            <p>
              Gluten is a structural protein naturally found
              in certain cereal grains. Although, strictly 
              speaking, "gluten" only refers to wheat proteins, 
              in medical literature it refers to the combination 
              of prolamin and glutelin proteins naturally 
              occurring in all grains that have been proved 
              capable of triggering celiac disease. These 
              include any species of wheat (such as common wheat, 
              durum, spelt, khorasan, emmer and einkorn), barley,
              rye and some oat cultivars, as well as any cross 
              hybrids of these grains (such as triticale).
              Gluten makes up 75–85% of the total protein in 
              bread wheat.
            </p>
          </article>  

          <div className="bg_mainbread">
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