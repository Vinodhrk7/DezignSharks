import React from "react";
import "./DigitalMarketing.css";
import { LinearProgress, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// Sample images
import person1 from "../assets/person2.webp";
import teamImage from "../assets/person3.webp";

function DigitalMarketing() {
  return (
    <div className="seo-section">
      <div className="seo-intro">
        <p>⮞⮞Welcome to SEO Agency⮜⮜</p>

        {/* Main Heading */}
        <h1 className="seo-heading">
          Comprehensive SEO & <br /> Digital Marketing Solutions.
        </h1>
      </div>
      {/* Main Content */}
      <div className="seo-content">
      {/* Left Side - Text and Progress Bars */}
      <div className="seo-left">
        <p className="seo-description">
          Our SEO services ensure your website ranks higher on <br/> search engines
          like Google, helping your <br/> business attract more organic traffic. From
          keyword <br/> research and on-page optimization to link <br/> building and
          technical SEO, we use proven strategies to <br/> improve your visibility and
          authority online.
        </p>
        <p className="seo-description">
          We believe in making informed decisions. By using analytics and
          performance...
        </p>

        <div className="progress-bars">
          <div className="progress-item">
            <div className="progress-label">
              <span>SEO Analysis</span>
              <span>80%</span>
            </div>
            <LinearProgress
              variant="determinate"
              value={80}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: "#eaeaea",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#fed91f",
                },
              }}
            />
          </div>

          <div className="progress-item">
            <div className="progress-label">
              <span>Marketing Strategy</span>
              <span>90%</span>
            </div>
            <LinearProgress
              variant="determinate"
              value={90}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: "#eaeaea",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#000",
                },
              }}
            />
          </div>
        </div>

        <Button
          variant="contained"
          className="about-btn"
          endIcon={<ArrowOutwardIcon />}
        >
          More About Us
        </Button>
      </div>
      &nbsp;&nbsp;
      {/* Right Side - Images and Circle Badge */}
      <div className="seo-right">
        <div className="seo-image-top">
          <img src={person1} alt="Person working" className="seo-img" />
        </div>

        <div className="badge-container">
          <div className="half-circle left"></div>
          <div className="half-circle left"></div>

          <div className="full-circle">
            <svg viewBox="0 0 200 200" className="rotating-text">
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                />
              </defs>
              <text fontSize="12" fontWeight="bold" fill="#000">
                <textPath href="#circlePath">
                  BUILD A SUCCESS BRAND WITH SOAP • BUILD A SUCCESS BRAND WITH SOAP •
                </textPath>
              </text>
            </svg>
            <div className="play-button">▶</div>
          </div>
        </div>

        <div className="seo-image-bottom">
          <img src={teamImage} alt="Team discussion" className="seo-imgs" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default DigitalMarketing;
