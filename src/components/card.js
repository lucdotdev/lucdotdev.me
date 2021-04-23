import React from "react"
import "../components/styles/card.css"

export default function card(props) {
  const { title, image, link, desc } = props
  return (
      <div class="card">
        <img class="card--avatar" src={image} />
        <p class="card--title">{title}</p>
        <p>{desc}</p>
        <a target="_blank" rel="noopener noreferrer" class="card--link" href={link}>
          Visit 🚀
        </a>
      </div>
  )
}
