import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ebd8ff;
  border: 2px #5d32c9;
  border-radius: 5px;
  color: #373737;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #5d32c9;
  }
`;

export const ComeBackLink = styled(Link)`
  display: block;
  position: absolute;
  right: 20px;
  top: 2px;
  margin-top: 5px;
  margin-left: 5px;
  padding: 10px 20px;
  border-radius: 5px;
  color: #471ca9;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #e1c1ff;
  }
`;
