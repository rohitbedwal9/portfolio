import React from "react";

import { Container, Navbar, Main, Section, Footer, Cards } from "@components";

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Main />
      <Section id={'about'} title={'About'} bgClr={'#fff'} />
      <Section id={'skills'} title={'Skills'} bgClr={'#E5E7EB'} />
      <Section id={'education'} title={'Education'} bgClr={'#fff'} />
      <Section id={'projects'} title={'Projects'} bgClr={'#E5E7EB'} />
      <Section id={'contact'} title={'Contact'} bgClr={'#fff'} />
      <Footer />
    </Container>
  );
};

export default Home;
