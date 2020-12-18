import React from "react"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../components/styles/style.css"
import Footer from "../components/footer"
import Header from "../components/header"
const IndexPage = () => (
  <div>
    <Header />
    <div className="homepage">
      <SEO title="lucdotdev" />
      <p className="intro1">Hi, my name is</p>
      <h2 className="introname">Luc Mwansa.</h2>

      <p className="para">I'm a software engineer based in DRC</p>
      <h3>
        I Build mobile and web <br /> applications.
      </h3>

      <div className="btnrow">
        <button className="button">
          <a className="btnlink" href="mailto:lucdotdev@gmail.com">
            Get In Touch
          </a>
        </button>
        <button className="button">
          <a className="btnlink" href="https://twitter.com/lucdotdev">
            &nbsp;Resume&nbsp;
          </a>
        </button>
      </div>
      {/* <div style={{ maxWidth: `100px`, marginB `1.45rem` }}>
      <Image />
    </div> */}
      {/* <AniLink cover to="projects" bg="#663399">
      <a className="projbtn">Projects</a>
    </AniLink> */}
    </div>
    <Footer />
  </div>
)

export default IndexPage
