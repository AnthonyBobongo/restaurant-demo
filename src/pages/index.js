import React, { Component } from "react";
import "../components/styles/landing-page.css";
import kbbqImage from "../images/kbbq4.jpg";
import Footer from "../components/footer";
import Header from '../components/newheader'
import AboutUs from '../components/about-us'

import SEO from "../components/seo"

class LandingPage extends Component {
  render() {
    return (
      <div>
    <SEO title="Jokbal BBQ" description="Marinated meats grilled to perfection." />
        <Header/>
        <div className="landing-page-container">
          <img
            src={kbbqImage}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="korean-bbq-pic" />
          <div className="restaurant-title-container">
            <div className="restaurant-title">
            Jokbal House
            <h1 className="restaurant-description">
              Come experience a one of a kind Korean BBQ Meal. Let's Eat!
            </h1>
            </div>

          </div>
        </div>
        <AboutUs/>
        <Footer/>
      </div>
    );
  }
}

export default LandingPage;
