import styled from '@emotion/styled'
import { AppBar, Toolbar } from '@mui/material'
import { BsGithub } from 'react-icons/bs'

export const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar disableGutters>
        <StyledBlogTitle href="/">🌟 Lynn's Blog</StyledBlogTitle>
        <StyledA href="https://github.com/moneychien19" target="_blank">
          <StyledGitHubIcon />
        </StyledA>
      </StyledToolbar>
    </StyledAppBar>
  )
}

const StyledAppBar = styled(AppBar)`
  background-color: white;
  box-shadow: none;
  position: fixed;
`
const StyledToolbar = styled(Toolbar)`
  &.MuiToolbar-root {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 2rem;
    height: 4.75rem;
    min-height: 4.75rem;
    color: black;
  }
`
const StyledBlogTitle = styled.a`
  font-size: 1.25rem;
  color: black;
  text-decoration: none;
`
const StyledA = styled.a`
  text-transform: none;
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
`
const StyledGitHubIcon = styled(BsGithub)`
  width: 1.5rem;
  height: 1.5rem;
`
