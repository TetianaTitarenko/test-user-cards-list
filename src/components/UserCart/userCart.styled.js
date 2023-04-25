import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: #471ca9;
  border-radius: 16px;
  padding-top: 214px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  width: 380px;
  height: 460px;
  box-sizing: border-box;
  transition: max-width 0.5s ease-in-out;
  @media (max-width: 380px) {
    width: 308px;
  }
`;

export const StyledVector = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
  transition: max-width 0.5s ease-in-out;
  @media (max-width: 380px) {
    left: 10px;
    top: 10px;
  }
`;

export const StyledPicture = styled.img`
  position: absolute;
  left: 36px;
  top: 28px;
  transition: max-width 0.5s ease-in-out;
  @media (max-width: 380px) {
    left: 0px;
  }
`;

export const DivLine = styled.div`
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const TitleTweets = styled.h2`
  color: #ebd8ff;
  margin: 62px;
  margin-bottom: 0px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const TitleFollowers = styled.h2`
  color: #ebd8ff;
  margin-top: 16px;
  margin-bottom: 0px;

  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  background: ${props => (props.isActiv ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #373737;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`;

export const AvatarGap = styled.div`
  position: absolute;
  top: 178px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 9px;
  left: 9px;
  border-radius: 50%;
  width: 62px;
  height: 62px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3, inset 0px 4.39163;
`;
