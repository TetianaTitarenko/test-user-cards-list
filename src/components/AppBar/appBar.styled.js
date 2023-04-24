import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledAppBar = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
`;

export const StyledLink = styled(NavLink)`
  padding: 1rem;
  font-weight: bold;
  text-decoration: none;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #471ca9;
    text-decoration: none;
  }
`;
