import React from "react";

export default function About() {
  return (
    <section className="about-us">
      <div className="about-container">
        <div className="about-image">
          <img src="https://img.freepik.com/free-photo/restaurant-with-red-carpet-floor-tables-chairs_140725-8024.jpg?t=st=1738304856~exp=1738308456~hmac=5091d2fc772e24f2a59ec22cfab18717d56a0e502bed9a8981c8c40eb6857423&w=740" alt="Restaurant Interior" />
        </div>
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>Our Restaurant</strong>, where we serve the
            finest culinary delights in a charming and elegant setting. Our
            mission is to provide a memorable dining experience, with exquisite
            dishes crafted from fresh, locally-sourced ingredients.
          </p>
          <p>
            Established in 2005, our restaurant has become a favorite for food
            enthusiasts. Whether you're here for a family dinner, a romantic
            date, or a casual outing, we guarantee an unforgettable experience.
          </p>
          <p>
            At <strong>Our Restaurant Name</strong>, we combine the art of
            cooking with a warm and inviting atmosphere, perfect for enjoying
            good food and great company.
          </p>
          <div className="about-features">
            <div className="feature">
              <h3>Fresh Ingredients</h3>
              <p>
                Our chefs use only the freshest, high-quality ingredients to
                prepare delicious and healthy meals.
              </p>
            </div>
            <div className="feature">
              <h3>Family Friendly</h3>
              <p>
                We offer a cozy ambiance and a kid-friendly menu that will
                satisfy both parents and children alike.
              </p>
            </div>
            <div className="feature">
              <h3>Private Events</h3>
              <p>
                Host your special occasions at our restaurant and create
                unforgettable memories with customized menus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
