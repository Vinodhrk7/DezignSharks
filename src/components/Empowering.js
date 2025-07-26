// Empowering.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Empowering.css";
import marketingImage from "../assets/person1.webp";
import subpersonImage from "../assets/subperson1.webp";
import subpersonImage2 from "../assets/subperson2.webp";
import subpersonImage3 from "../assets/subperson3.webp";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "@mui/material/Avatar";

function Empowering() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    { name: "Home", dropdown: ["Sub Home 1", "Sub Home 2"] },
    { name: "About" },
    { name: "Portfolio", dropdown: ["Project 1", "Project 2"] },
    { name: "Pages" },
    { name: "Blog", dropdown: ["Post 1", "Post 2"] },
    { name: "Contact" },
  ];

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(74, 107, 255, 0.4)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="Empowering">
      <motion.header
        className="header fixed-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.div className="logo" whileHover={{ scale: 1.1 }}>
          SAOR
        </motion.div>

        <nav className="nav">
          <div className="nav-items">
            {menuItems.map(({ name, dropdown }) => (
              <div key={name} className="nav-item">
                <motion.div
                  className="nav-link"
                  onClick={() => dropdown && toggleDropdown(name)}
                  whileHover={{ scale: 1.05 }}
                >
                  <a href={`#${name.toLowerCase()}`}>{name}</a>
                  {dropdown && <KeyboardArrowDownIcon fontSize="medium" />}
                </motion.div>

                {dropdown && openDropdown === name && (
                  <motion.div
                    className="dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(" ", "-")}`}
                      >
                        {subItem}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <motion.a href="#search" className="search-btn">
            <SearchIcon className="search-icon" />
          </motion.a>

          <motion.a
            href="#quote"
            className="quote-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#FED91F" }}
          >
            Get A Quote <ArrowOutwardIcon className="arrow-icon" />
          </motion.a>
        </nav>
      </motion.header>

      <main className="main-content scrollable-content">
        <div className="content-container">
          <motion.div
            className="text-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="subtitle" variants={itemVariants}>
              SEO & Marketing Agency
            </motion.h2>

            <motion.h1 className="title">
              {["Empowering", "Growth Unlock", "SEO Solutions"].map(
                (line, i) => (
                  <motion.span
                    key={i}
                    variants={itemVariants}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: i * 0.2 }}
                  >
                    {line}
                  </motion.span>
                )
              )}
            </motion.h1>

            <motion.p className="description" variants={itemVariants}>
              At Sao, we are dedicated to helping businesses navigate the
              complex digital landscape with ease. We specialize in providing a
              full spectrum of SEO.
            </motion.p>

            <motion.button
              className="cta-button"
              variants={buttonVariants}
              whileHover="hover"
            >
              Get Started Now <ArrowOutwardIcon className="arrow-icon" />
            </motion.button>
            <div className="avatar-group-container">
              <p className="avatar-label">Get Started Now</p>
              <div className="avatar-stack">
                <Avatar
                  alt="Person 1"
                  src={subpersonImage}
                  className="avatar"
                />
                <Avatar
                  alt="Person 2"
                  src={subpersonImage2}
                  className="avatar"
                />
                <Avatar
                  alt="Person 3"
                  src={subpersonImage3}
                  className="avatar"
                />
                <div className="avatar plus-avatar">+</div>
              </div>
            </div>
          </motion.div>
          <img
            src={marketingImage}
            alt="Marketing Team"
            className="marketing-image"
          />
        </div>
      </main>
    </div>
  );
}

export default Empowering;
