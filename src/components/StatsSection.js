import React from "react";
import "./StatsSection.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import EastIcon from "@mui/icons-material/East";
import seoImage from "../assets/seo.webp";

const StatsSection = () => {
  const stats = [
    {
      value: "3K+",
      label: "Successful Project",
    },
    {
      value: "20K",
      label: "Experienced Team",
    },
    {
      value: "43K+",
      label: "Happy Customers",
    },
    {
      value: "36K+",
      label: "Client 5 Star Review",
    },
  ];

  const services = [
    {
      title: "⭐Research & Analysis ⭐",
    },
    {
      title: "⭐Search Engine Optimization ⭐",
    },
    {
      title: "⭐SEO Strategy Development ⭐",
    },
  ];

  const service = [
    {
      title: "Search Engine Optimization",
      content:
        "Our SEO services ensure your website ranks higher on search engines like Google, helping your business.",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      icon: <ArrowOutwardIcon className="services__list-icon" />,
    },
    {
      title: "Content Marketing",
      icon: <ArrowOutwardIcon className="services__list-icon" />,
    },
    {
      title: "Email Marketing",
      icon: <ArrowOutwardIcon className="services__list-icon" />,
    },
    {
      title: "Social Media Marketing",
      icon: <ArrowOutwardIcon className="services__list-icon" />,
    },
    {
      title: "Conversion Rate Optimization",
      icon: <ArrowOutwardIcon className="services__list-icon" />,
    },
  ];

  return (
    <div className="stats-container">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
            {index !== stats.length - 1 && (
              <div className="vertical-line-between"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="seo-strategy-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="seo-strategy-title">{service.title}</h3>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div className="services-section">
        <div className="services-text">
          <h2 className="services-subtitle">⮞⮞Our Services</h2>
          <p className="services-title">
            Boost your SEO ranking with <br />
            excellent effective services
          </p>
        </div>
        <div className="circle">
          <button className="view-all-button">
            View All Work
            <ArrowOutwardIcon />
          </button>
        </div>
        <hr className="button-hr" />
      </div>
      <div className="service">
        <div className="service__content">
          <div className="service__card">
            <div className="service__card-header">
              <h3 className="service__card-title">{service[0].title}</h3>
              <EastIcon className="service__card-icon" />
            </div>
            <p className="service__card-text">{service[0].content}</p>
          </div>

          {/* Other Services List */}
          <div className="service__list">
            {service.slice(1).map((service, index) => (
              <div key={index}>
                <div className="service__list-item">
                  <h3 className="service__list-title">{service.title}</h3>
                  <div className="service__list-icon">{service.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="service__image">
          <img
            src={seoImage}
            alt="Digital Marketing Services"
            className="service__image-img"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
