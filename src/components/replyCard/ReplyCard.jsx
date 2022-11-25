import React from "react";
import PropTypes from "prop-types";
import * as S from "./ReplyCard.styles";

const ReplyCard = ({ userInfo, content, className, id }) => {
  return (
    <S.Container>
      <S.Container className={className} id={id}>
        <S.UserInfoSection>
          {userInfo ? (
            <S.UserInfo>
              <S.Image
                src={
                  userInfo[0].image
                    ? userInfo[0].image
                    : "data:image/jpeg;base64,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"
                }
              />
              <S.Name>
                {userInfo[0].name}
                <S.UserName>@{userInfo[0].username}</S.UserName>
              </S.Name>
            </S.UserInfo>
          ) : (
            <div>loading</div>
          )}
        </S.UserInfoSection>
        <S.Text>{content}</S.Text>
      </S.Container>
    </S.Container>
  );
};

ReplyCard.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number,
  userInfo: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default ReplyCard;
