import React from "react";
import UnderConstruction from "react-under-construction";
import "react-under-construction/build/css/index.css";
import watch from "./Images/watch.png";
import lagrasse from "./Images/Lagrasse1.jpg";
import mail from "./Images/mail.png";

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
      alt: "watch",
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
        image: mail,
      },
    ]}
  />
);

export default App;
