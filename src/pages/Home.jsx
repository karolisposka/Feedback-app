import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sortOptionSelected } from "../store/slices/suggestionsSlice";
import { suggestionsSelector } from "../store/selectors";
import MainContainer from "../components/mainContainer/MainContainer";
import Container from "../components/container/Container";
import Section from "../components/section/Section";
import Header from "../components/header/Header";
import MobileSideMenu from "../components/mobileSideMenu/MobileSideMenu";
import SortSection from "../components/sortSection/SortSection";

//categories list for header

const categories = [
  {
    to: "/all",
    text: "all",
  },
  {
    to: "/UI",
    text: "UI",
  },
  {
    to: "/UX",
    text: "UX",
  },
  {
    to: "/Enhancement",
    text: "Enhancement",
  },
  {
    to: "/Bug",
    text: "Bug",
  },
  {
    to: "/Feature",
    text: "Feature",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector(suggestionsSelector);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/all");
  }, []);

  const handleOptionSelect = (value) => {
    dispatch(sortOptionSelected(value));
  };

  return (
    <>
      <MainContainer>
        <Header categories={categories} />
        <Container>
          <MobileSideMenu />
          <Section>
            <SortSection
              number={suggestions && suggestions.length}
              handleChange={(value) => {
                handleOptionSelect(value);
              }}
            />
            <Outlet />
          </Section>
        </Container>
      </MainContainer>
    </>
  );
};

export default Home;
