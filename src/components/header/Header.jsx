import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { mobileMenuContext } from "../../context/mobileContext";
import { keySelector } from "../../store/selectors";
import Categories from "../categories/Categories";
import RoadMap from "../roadMap/RoadMap";
import * as S from "./Header.styles";

const Header = ({ categories }) => {
  const [displayMobileMenu, setDisplayMobileMenu] = useContext(mobileMenuContext);
  const key = useSelector(keySelector);
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
        {!key && (
          <>
            <S.Box>
              <S.LoginBtn to="/login">Login</S.LoginBtn>
              <S.RegisterBtn to="/register"> Register </S.RegisterBtn>
            </S.Box>
          </>
        )}
        {!displayMobileMenu ? (
          <S.MenuButton>
            <S.BurgerMenu
              onClick={() => {
                setDisplayMobileMenu(true);
              }}
            />
          </S.MenuButton>
        ) : (
          <S.MenuButton
            onClick={() => {
              setDisplayMobileMenu(false);
            }}
          >
            <S.CloseBtn />
          </S.MenuButton>
        )}
      </S.ContentWrapper>
    </S.Header>
  );
};

export default Header;
