import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "No late night party",
        //info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      },
      {
        icon: <FaHiking />,
        title: "No extra person",
        //info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Parking",
        //info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      },
      {
        icon: <FaBeer />,
        title: "No Alcohol",
        //info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Rules and Information" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
