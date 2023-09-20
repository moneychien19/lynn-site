import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import { BsGithub } from "react-icons/bs";

export const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar disableGutters>
        <StyledA href="https://github.com/moneychien19" target="_blank">
          <StyledGitHubIcon />
        </StyledA>
      </StyledToolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  background-color: #4a55a2;
  box-shadow: none;
`;
const StyledToolbar = styled(Toolbar)`
  &.MuiToolbar-root {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    padding: 0 1rem;
    height: 2.5rem;
    min-height: 2.5rem;
  }
`;
const StyledA = styled.a`
  color: white;
  text-transform: none;
  font-size: 1rem;
  text-decoration: none;
`;
const StyledGitHubIcon = styled(BsGithub)`
  width: 1.25rem;
  height: 1.25rem;
`;
