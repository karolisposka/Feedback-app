import React, { useContext } from "react";
import { mobileMenuContext } from "../../context/mobileContext";
import * as S from "./MobileSideMenu.styles";
import InfoBox from "../infoBox/InfoBox";
import Categories from "../categories/Categories";
import RoadMap from "../../components/roadMap/RoadMap";

const categories = [
  {
    to: "all",
    text: "all",
  },
  {
    to: "UI",
    text: "UI",
  },
  {
    to: "UX",
    text: "UX",
  },
  {
    to: "Enhancement",
    text: "Enhancement",
  },
  {
    to: "Bug",
    text: "Bug",
  },
  {
    to: "Feature",
    text: "Feature",
  },
];

const MobileSideMenu = () => {
  const [displayMobileMenu] = useContext(mobileMenuContext);

  return (
    <S.MobileMenuContainer display={displayMobileMenu}>
      <S.MobileMenu display={displayMobileMenu}>
        <InfoBox>
          <Categories categories={categories} />
        </InfoBox>
        <InfoBox>
          <RoadMap />
        </InfoBox>
        <S.RegisterBtn to="/register">Register</S.RegisterBtn>
        <S.LoginBtn to="/login">Login</S.LoginBtn>
      </S.MobileMenu>
    </S.MobileMenuContainer>
  );
};

export default MobileSideMenu;
