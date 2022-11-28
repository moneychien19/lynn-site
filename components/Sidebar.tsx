import styled from 'styled-components'
import { Drawer, Divider } from '@mui/material'

const articleTitles = ['用 Webpack 打包前端專案', 'Storybook 輕鬆進行 UI 元件管理']
const nowArticleTitle = '用 Webpack 打包前端專案'

export const Sidebar = () => {
  return (
    <StyledDrawer open anchor="right" hideBackdrop elevation={0}>
      <StyledAuthorContainer>
        <StyledAuthorName>Lynn</StyledAuthorName>
        <StyledAuthorDescription>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, nulla.</StyledAuthorDescription>
      </StyledAuthorContainer>
      <StyledArticleListContainer>
        <StyledArticleListTitle>#前端工具</StyledArticleListTitle>
        <StyledArticleListDivider />
        {articleTitles.map(title => <StyledArticleItem key={title} $isSelected={title === nowArticleTitle}>{title}</StyledArticleItem>)}
      </StyledArticleListContainer>
    </StyledDrawer>
  )
}

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    border-left: 1px solid #c5c5c5;
    width: 20rem;
  }
`

const StyledAuthorContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 1rem;  
  width: 18rem;
`
const StyledAuthorName = styled.p`
  font-size: 1.5rem;
`
const StyledAuthorDescription = styled.p`
  color: #484848;
  font-size: 1.25rem;
`

const StyledArticleListContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 1rem;
  width: 18rem;
`
const StyledArticleListTitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin: 0.5rem 0;
`
const StyledArticleListDivider = styled(Divider)`
  color: #c5c5c5;
  width: 100%;
`
const StyledArticleItem = styled.p<{ $isSelected: boolean }>`
  color: ${props => props.$isSelected ? '#295bdb' : 'black'};
  line-height: 0.75rem;
`