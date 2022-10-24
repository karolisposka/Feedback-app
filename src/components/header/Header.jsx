import React, { useContext } from "react";
import { mobileMenuContext } from "../../context/mobileContext";
import Categories from "../categories/Categories";
import RoadMap from "../roadMap/RoadMap";
import * as S from "./Header.styles";

const Header = ({ categories }) => {
  const [displayMobileMenu, setDisplayMobileMenu] = useContext(mobileMenuContext);
  console.log(displayMobileMenu);

  return (
    <S.Header>
      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Title>
            Frontend mentor
            <S.Span>Feedback board</S.Span>
          </S.Title>
        </S.TitleWrapper>
        <S.Box>
          <Categories categories={categories} />
        </S.Box>
        <S.Box>
          <RoadMap />
        </S.Box>
        {!displayMobileMenu ? (
          <S.Button>
            <S.BurgerMenu
              onClick={() => {
                setDisplayMobileMenu(true);
              }}
            />
          </S.Button>
        ) : (
          <S.Button
            onClick={() => {
              setDisplayMobileMenu(false);
            }}
          >
            <S.CloseBtn />
          </S.Button>
        )}
      </S.ContentWrapper>
    </S.Header>
  );
};

export default Header;
