import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About GlassShop</h1>
      <div className="about-content">
        <section>
          <h2>Our Story</h2>
          <p>
            GlassShop was founded in 2023 with the vision of bringing 
            the beauty of glassmorphism design into physical products.
          </p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>
            To create products that blend digital aesthetics with real-world 
            functionality, offering unique items that stand out.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;