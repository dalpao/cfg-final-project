import Navbar from "../Components/Navbar";
import { Card } from "../Components/Card";
import veggie from "../images/veggie.jpg"
import vegan from "../images/vegan.jpg"
import gluten_free from "../images/gluten_free.jpg"
import paleo from "../images/paleo.jpg"
import keto from "../images/keto.jpg"
import flexi from "../images/flexi.jpg"

// for each card that I use I am sending the respective props values
function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="card-container">
        <div className="intro">
          <h1 className="card-intro">Explore Our Recipe Collection</h1>
          <p className="card-presentation">
            Welcome to TastyBites, your ultimate destination for culinary
            inspiration and gastronomic adventures. We believe that food is not
            just nourishment but a delightful journey that tantalizes the senses
            and brings people together. Whether you're a seasoned home cook or
            an aspiring foodie, our platform is here to ignite your passion for
            flavors, elevate your cooking skills, and help you embark on a
            mouthwatering exploration of the culinary world.
          </p>
        </div>
        <Card
          imgSrc= {veggie}
          imgAlt="Recipe Card"
          title="Vegetarian"
          description="Embrace plant-based goodness by abstaining from meat and seafood, while enjoying fruits, vegetables, legumes, and plant-based proteins."
        />

        <Card
          imgSrc= {vegan}
          imgAlt="Recipe Card"
          title="Vegan"
          description="Take it a step further by avoiding all animal products, including
          dairy, eggs, and honey. Indulge in sustainable plant-based
          alternatives."
        />

        <Card
          imgSrc= {gluten_free}
          imgAlt="Recipe Card"
          title="Gluten-Free"
          description="Cater to gluten sensitivities by opting for alternative grains and
          enjoying gluten-free pastas, bread, and baked goods."
        />

        <Card
          imgSrc={paleo}
          imgAlt="Recipe Card"
          title="Paleo"
          description="Embrace a natural and ancestral way of eating with whole, unprocessed
          foods like lean meats, fish, fruits, vegetables, nuts, and seeds."
        />

        <Card
          imgSrc= {keto}
          imgAlt="Recipe Card"
          title="Keto"
          description="Join the low-carb, high-fat trend with healthy fats, moderate protein,
          and minimal carbs to achieve a state of ketosis."
        />

        <Card
          imgSrc={flexi}
          imgAlt="Recipe Card"
          title="Flexitarian"
          description="Embrace Flexibility and prioritize plant-based meals while occasionally including sustainably sourced meat and seafood."
        />
      </div>
    </div>
  );
}
export default Home;
