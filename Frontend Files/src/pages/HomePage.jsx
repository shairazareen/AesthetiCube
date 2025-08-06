import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import image1 from '../assets/image1.png';

const Homepage = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        // Check if document.fonts is available
        if (document.fonts) {
          // Wait for all fonts to be ready
          await document.fonts.ready;
          setFontsLoaded(true);
        } else {
          // Fallback for older browsers
          setTimeout(() => setFontsLoaded(true), 1000);
        }
      } catch (error) {
        // Fallback if there's an error
        console.warn('Font loading failed, showing content anyway');
        setFontsLoaded(true);
      }
    };

    loadFonts();
  }, []);

  return (
    <div className="homepage">
      {/* Only the content area is affected by font loading */}
      <div className={`homepage-content ${fontsLoaded ? 'fonts-loaded' : ''}`}>
        {/* Left Half */}
        <div className="left-half">
          <div className="content-wrapper">
            <h1 className="title slide-up">Welcome to AesthetiCube</h1>
            <div className="description-wrapper">
              <p className="description slide-up">
                Born from a love of soulful design, we craft original art and curated decor to bring spaces to life. As an online store, we offer handmade artwork, creative supplies, and crafted pieces that celebrate color, form, and feeling—all made in-house with care and intention. This is our studio, our gallery, and our passion—and now, it's yours too.
              </p>
            </div>
            <Link to="/categories" className="cta-button slide-up">
  Browse Collections
</Link>
          </div>
        </div>

        {/* Right Half */}
        <div className="right-half">
          <img 
            src={image1} 
            className="hero-image"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

