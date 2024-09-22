import gaustatoppen from "../assets/img/gaustatoppen.jpg";
import prague from "../assets/img/prague.jpg";
import prague2 from "../assets/img/prague2.jpg";
import "./styles/about.css";

function About() {
  return (
    <div>
      <div className="about" id="about">
        <h2>About</h2>
        <p className="about-header">
          I'm a <b>developer</b> and a <b>designer</b> who has been studying web
          development at NTNU Gjøvik for the last 3 years.
        </p>
        <p>
          I'm from Slemmestad in Asker Norway. When i'm not coding i enjoy going
          for hikes, being around nature or going to the gym. I love to travel
          and take pictures.
        </p>
        <div className="image-collage">
          <img src={gaustatoppen} alt="Gaustatoppen" />
          <img src={prague} alt="Image 2" />
          <img src={prague2} alt="Image 3" />
        </div>
      </div>
    </div>
  );
}

export default About;
