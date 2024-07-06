import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Drawer, Divider } from "@mui/material"
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { collectionsMapping } from '../models/collectionsMapping'
import { primaryColor, neutralColor } from '../theme';

export const Sidebar = ({ pathname }) => {
  const isFocus = path => pathname === path

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <StyledList>
        <StyledListItem id="list-item" href="/" $isFocus={isFocus("/")}>所有文章</StyledListItem>
        
        <StyledDivider />
        <StyledSubTitle>
          <MdOutlineCollectionsBookmark />
          Collections
        </StyledSubTitle>
        {Object.entries(collectionsMapping).map(([key, value]) => (
          <StyledListItem id="list-item" key={key} href={`/${key}`} $isFocus={isFocus(`/${key}`)}>{value}</StyledListItem>
        ))}
      </StyledList>
    </StyledDrawer>
  )
}
Sidebar.propTypes = {
  pathname: PropTypes.string
}

const StyledDrawer = styled(Drawer)`
  & .MuiPaper-root {
    width: 15%;
    height: 50%;
    top: 20%;
    border: 1px solid ${neutralColor[300]};
    border-radius: 0.5rem;
    margin-left: 1rem;
  }
`
const StyledDivider = styled(Divider)`
  margin: 0.5rem 0;
`
const StyledList = styled.div`
  margin: 0.5rem;
`
const StyledSubTitle = styled.div`
  font-size: 0.75rem;
  margin: 1rem 0.25rem 0.75rem 0.25rem;
  color: ${neutralColor[500]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 0.5rem;
`
const StyledListItem = styled.a`
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  display: block;
  padding-left: 1rem;
  background-color: ${props => props.$isFocus ? primaryColor[50] : primaryColor[0]};
  color: ${neutralColor[950]};
  border-radius: 0.25rem;
  height: 2rem;
  line-height: 2rem;
  &:hover {
    background-color: ${props => props.$isFocus ? primaryColor[50] : neutralColor[100]};
  }
`