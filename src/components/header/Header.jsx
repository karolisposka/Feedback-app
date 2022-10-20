import React, { useContext } from "react";
import { mobileMenuContext } from "../../context/mobileContext";
import * as S from "./Header.styles";

const Header = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useContext(mobileMenuContext);
  console.log(displayMobileMenu);

  return (
    <S.Header>
      <S.ContentWrapper>
        <S.Title>
          Frontend mentor
          <S.Span>Feedback board</S.Span>
        </S.Title>
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
