import React from "react";
import UnderConstruction from "react-under-construction";
import "react-under-construction/build/css/index.css";
import watch from "./Images/watch.png";
import lagrasse from "./Images/Lagrasse.JPG";

const App = () => (
  <UnderConstruction
    background={{
      image: lagrasse,
      textColor: "#fff",
      overlay: {
        color: "#000",
        opacity: ".5",
      },
    }}
    logo={{
      src: watch,
      alt: "alt text",
    }}
    title={{
      text: "Christian Keller",
    }}
    description={{
      text: "Alle Geschäftsanfragen unter christian@kellermedia.eu",
      style: {
        maxWidth: "500px",
      },
    }}
    links={[
      // {
      //   url: "https://www.facebook.com/",
      //   image: "https://image.flaticon.com/icons/svg/220/220200.svg",
      // },
      // {
      //   url: "https://www.twitter.com/",
      //   image: "https://image.flaticon.com/icons/svg/145/145812.svg",
      // },
      // {
      //   url: "https://www.linkedin.com/",
      //   image: "https://image.flaticon.com/icons/svg/145/145807.svg",
      // },
      {
        url: "mailto:christian@kellermedia.eu",
        image: "https://image.flaticon.com/icons/svg/321/321817.svg",
      },
    ]}
  />
);

export default App;
