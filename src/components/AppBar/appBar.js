import { StyledAppBar, StyledLink } from './appBar.styled';

export const AppBar = () => {
  return (
    <StyledAppBar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/tweets">Tweets</StyledLink>
    </StyledAppBar>
  );
};
