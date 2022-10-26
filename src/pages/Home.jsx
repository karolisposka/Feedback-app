import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { suggestionsSelector } from "../store/selectors";
import { suggestionsRecieved, errorRecieved } from "../store/slices/suggestionsSlice";
import MainContainer from "../components/mainContainer/MainContainer";
import Container from "../components/container/Container";
import Section from "../components/section/Section";
import Loader from "../components/loader/Loader";
import Header from "../components/header/Header";
import MobileSideMenu from "../components/mobileSideMenu/MobileSideMenu";
import SortSection from "../components/sortSection/SortSection";
import SuggestionsList from "../components/suggestionsList/SuggestionsList";
import axios from "axios";

//categories list for header

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

const Home = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector(suggestionsSelector);

  const getSuggestions = async () => {
    try {
      const res = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        url: "v1/suggestions/get",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.data.data) {
        return dispatch(suggestionsRecieved(res.data.data));
      }
      if (res.data.err) {
        return dispatch(errorRecieved(res.data.err));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <>
      <MainContainer>
        <Header categories={categories} />
        <Container>
          <MobileSideMenu />
          <Section>
            <SortSection number={suggestions && suggestions.length} />
            {suggestions ? <SuggestionsList list={suggestions} /> : <Loader />}
          </Section>
        </Container>
      </MainContainer>
    </>
  );
};

export default Home;
