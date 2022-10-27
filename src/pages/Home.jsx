import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { suggestionsSelector } from "../store/selectors";
import {
  sortedByHighestUpvotes,
  sortedByLowestUpvotes,
  sortedByHighestComments,
  sortedByLowestComments,
} from "../store/slices/suggestionsSlice";
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
  const [sortOption, setSortOption] = useState();
  const navigate = useNavigate();
  const suggestions = useSelector(suggestionsSelector);

  useEffect(() => {
    navigate("/all");
  }, []);

  const sortData = (option) => {
    switch (option) {
      case "least":
        return dispatch(sortedByLowestUpvotes());
      case "most":
        return dispatch(sortedByHighestUpvotes());
      case "leastCom":
        return dispatch(sortedByLowestComments());
      case "mostCom":
        return dispatch(sortedByHighestComments());
    }
  };

  useEffect(() => {
    sortData(sortOption);
  }, [sortOption]);

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
                setSortOption(value);
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
