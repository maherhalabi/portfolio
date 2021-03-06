import React from "react"
import { Helmet } from "react-helmet"

const Metadata = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          http-equiv="Content-Security-Policy"
          content="
          default-src 'self' https://www.google-analytics.com https://img.icons8.com/fluency/96/000000/close-window.png; 
          font-src http://fonts.gstatic.com; 
          style-src 'self' 'unsafe-inline' http://fonts.googleapis.com;
          "
        />
        <meta
          //DESCRIPTION
          name="description"
          content="Software developer and college student, with a passion for developing
          applications and solutions, that will help your business accelerate
          its growth and surpass the competition."
        />
        <meta name="keywords" content="" />
        <title>Maher Halabi - Software Engineer</title>
        <link rel="canonical" />
      </Helmet>
    </div>
  )
}

export default Metadata
