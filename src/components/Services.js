import React, { Component } from "react"
import Title from "./Title"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free Cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, magnam!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, magnam!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, magnam!"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, magnam!"
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
