import React from "react";
import data from "../assets/data/data.json";
import Container from "../components/container/Container";
import Section from "../components/section/Section";
import Header from "../components/header/Header";
import MobileSideMenu from "../components/mobileSideMenu/MobileSideMenu";

const Home = () => {
  return (
    <>
      <Header>Hello world</Header>
      <Container>
        <MobileSideMenu />
        <Section>Home page</Section>
      </Container>
    </>
  );
};

export default Home;
