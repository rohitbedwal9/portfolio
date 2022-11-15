import React from "react";

import { Container, Navbar, Main, Footer, Cards } from "@components";

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Main />
      <Cards />
      <Footer />
    </Container>
  );
};

export default Home;
