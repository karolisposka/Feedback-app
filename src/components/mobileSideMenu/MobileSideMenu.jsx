import React, { useContext } from "react";
import { mobileMenuContext } from "../../context/mobileContext";
import * as S from "./MobileSideMenu.styles";
import Categories from "../categories/Categories";
import InfoBox from "../infoBox/InfoBox";

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

const MobileSideMenu = () => {
  const [displayMobileMenu] = useContext(mobileMenuContext);

  return (
    <S.MobileMenuContainer display={displayMobileMenu}>
      <S.MobileMenu display={displayMobileMenu}>
        <InfoBox>
          <Categories categories={categories} />
        </InfoBox>
      </S.MobileMenu>
    </S.MobileMenuContainer>
  );
};

export default MobileSideMenu;
