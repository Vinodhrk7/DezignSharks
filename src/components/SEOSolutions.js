import React from 'react';
import './SEOSolutions.css';
import SEOImage from '../assets/group.webp'; // Adjust the path as necessary

const SEOSolutions = () => {
  return (
    <div className="seo-solutions">
      <div className="seo-solutions__content">
       <p>⮞⮞ Our Mission & Vision ⮜⮜</p>
        <h1 className="seo-solutions__title">Present creative and innovative<br/> SEO solutions</h1>
      </div>
      
      <div className="seo-solutions__image">
        <img 
          src={SEOImage} 
          alt="Creative SEO Solutions" 
          className="seo-solutions__image-content"
        />
      </div>
        <div className="mission-vision">
      <div className="mission-vision__container">
        {/* Mission Card - Left Side */}
        <div className="mission-vision__card mission-vision__card--mission">
          <div className="mission-vision__card-header">
            <h3 className="mission-vision__card-subtitle">Our Mission</h3>
            <h2 className="mission-vision__card-title">Customer Success Is Our<br/> Mission</h2>
          </div>
          <div className="mission-vision__card-content">
            <p>
              Our mission is to empower businesses by creating digital marketing strategies that are not only effective but sustainable. We believe in building long-term relationships with our clients by delivering results that exceed expectations and drive real, tangible growth.
            </p>
          </div>
        </div>

        {/* Vision Card - Right Side */}
        <div className="mission-vision__card mission-vision__card--vision">
          <div className="mission-vision__card-header">
            <h3 className="mission-vision__card-subtitle">Our Vision</h3>
            <h2 className="mission-vision__card-title">To be the Leading Agency in<br/> the Industry.</h2>
          </div>
          <div className="mission-vision__card-content">
            <p>
              We help you build and maintain a strong social media presence across platforms like Facebook, Instagram, LinkedIn, and Twitter. By crafting tailored social media strategies, we engage your audience, foster brand loyalty, and drive conversions.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SEOSolutions;