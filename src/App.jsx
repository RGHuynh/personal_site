import Nav from "./components/nav/Nav";
import React from "react";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Experience from "./components/experience/Experience";

const App = () => {
  return (
    <body>
      <Nav />
      <About />
      <Contacts />
      <Experience />
    </body>
  );
};

export default App;