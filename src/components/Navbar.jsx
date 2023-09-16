import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";

export const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar disableGutters>
        <StyledA href="/blog">Blog</StyledA>
        <StyledA href="/">About Me</StyledA>
      </StyledToolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  background-color: #4a55a2;
  box-shadow: none;
`;
const StyledToolbar = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0 1rem;
`;
const StyledA = styled.a`
  color: white;
  text-transform: none;
  font-size: 1rem;
  text-decoration: none;
`;
