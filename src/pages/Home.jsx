import React from "react";
import data from "../assets/data/data.json";
import MainContainer from "../components/mainContainer/MainContainer";
import Container from "../components/container/Container";
import Section from "../components/section/Section";
import Header from "../components/header/Header";
import MobileSideMenu from "../components/mobileSideMenu/MobileSideMenu";
import SortSection from "../components/sortSection/SortSection";
import SuggestionsList from "../components/suggestionsList/SuggestionsList";

const Home = () => {
  console.log(data);

  const categories = [
    {
      to: "/filter/all",
      text: "all",
    },
    {
      to: "/filter/UI",
      text: "UI",
    },
    {
      to: "/filter/UX",
      text: "UX",
    },
    {
      to: "/filter/Enchancment",
      text: "Enchancment",
    },
    {
      to: "/filter/Bug",
      text: "Bug",
    },
    {
      to: "/filter/Feature",
      text: "Feature",
    },
  ];

  return (
    <>
      <MainContainer>
        <Header categories={categories} />
        <Container>
          <MobileSideMenu />
          <Section>
            <SortSection />
            <SuggestionsList list={data.productRequests} />
          </Section>
        </Container>
      </MainContainer>
    </>
  );
};

export default Home;
