import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monoBlue } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { theme } from '../styles/theme'
import { Sidebar } from '../components/Sidebar'

export default function Blog() {
  return (
    <div>
      <StyledContentContainer>
        <StyledNavContainer>
          <p>Why Webpack?</p>
          <p>How Webpack?</p>
          <p>&nbsp;&nbsp;Project Initialization</p>
          <p>&nbsp;&nbsp;Execution</p>
        </StyledNavContainer>
        <StyledArticleContainer>
          <StyledArticleTitle>用 Webpack 打包前端專案</StyledArticleTitle>
          <StyledArticleTagContainer>
            <StyledArticleTag>2022.11.19</StyledArticleTag>
            <StyledArticleTag>#前端工具</StyledArticleTag>
          </StyledArticleTagContainer>
          <StyledH2>Why Webpack?</StyledH2>
          <StyledP>使用 Webpack 對前端專案的好處有：</StyledP>
          <StyledUl>
            <li>可以在專案中使用 npm packages</li>
            <li>可以在專案中撰寫 JavaScript ES6 或 ES7（需要透過 babel 來幫助）</li>
            <li>可以 Minify 或優化程式碼</li>
            <li>可以將程式碼中的 LESS 或 SCSS 轉換成 CSS</li>
            <li>可以使用 HMR（Hot Module Replacement），即當程式碼被修改時，server 會傳送訊息通知瀏覽器修改該模組的程式碼，這樣就能在不刷新瀏覽器的前提下進行更新</li>
            <li>可以包含任何類型的檔案到你的程式碼中，除了 JS 之外也可以引入 CSS、JSON、SVG 等</li>
          </StyledUl>
          <StyledH2>How Webpack?</StyledH2>
          <StyledP>Webpack 的運作方式是會指定一個檔案作為進入點（tree root），每次從一個檔案 import 另外一個檔案時，檔案會被加到 tree 裡，最後會形成一包 bundle</StyledP>
          <StyledH3>Project Initialization</StyledH3>
          <StyledOl>
            <li>先創建一個新的資料夾，並 cd 到這個資料夾</li>
            <li>使用 <StyledInlineMark>npm init -y</StyledInlineMark> 指令創建一個 <StyledInlineMark>package.json</StyledInlineMark> 檔</li>
            <li>使用 <StyledInlineMark>npm install --save-dev webpack webpack-cli</StyledInlineMark> 安裝 Webpack，這樣資料夾裡就又多出了 <StyledInlineMark>package-lock.json</StyledInlineMark> 和 <StyledInlineMark>node_modules/</StyledInlineMark></li>
          </StyledOl>
          <StyledH3>Execution</StyledH3>
          <StyledP>此時試著執行 <StyledInlineMark>npx webpack</StyledInlineMark>，會出現錯誤：<StyledInlineMark>Module not found: Error: Can't resolve './src'</StyledInlineMark>，這是因為 Webpack 預設的<StyledA href="https://webpack.js.org/concepts/#entry">進入點</StyledA>是在 <StyledInlineMark>./src/index.js</StyledInlineMark>，在我們沒有做額外設定的狀況下，Webpack 又找不到這個進入點因此跳錯。解決方式是在專案中新增 <StyledInlineMark>./src/index.js</StyledInlineMark>，先試著在檔案中填入以下內容。</StyledP>
          <StyledCodeBlock language="javascript" style={monoBlue}>
            document.body.appendChild(component());
          </StyledCodeBlock>
        </StyledArticleContainer>
      </StyledContentContainer>
      <Sidebar />
    </div>
  )
}

const StyledContentContainer = styled.div`
  width: calc(100% - 20rem - 5rem);
  display: flex;
`
const StyledNavContainer = styled.div`
  width: 17rem;
  padding: 10rem 0 0 3rem;
  font-size: 0.875rem;
  color: ${theme.palette.secondary.main};
  & p {
    margin: 0;
    line-height: 1.75rem;
  }
`
const StyledArticleContainer = styled.div`
  width: calc(100% - 17rem);
  padding-top: 5rem;
  padding-bottom: 4rem;
`
const StyledArticleTitle = styled.p`
  font-size: 2rem;
  color: ${theme.palette.primary.main};
  font-weight: bold;
  margin: 0;
`
const StyledArticleTagContainer = styled.div`
  display: flex;
  align-items: center;
`
const StyledArticleTag = styled.p`
  color: ${theme.palette.secondary.main};
  margin-top: 0.75rem;
  & + & {
    margin-left: 1rem;
  }
`

const StyledH2 = styled.h2`
  font-size: 1.75rem;
  font-weight: normal;
  color: ${theme.palette.primary.main};
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
`
const StyledH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  color: ${theme.palette.primary.main};
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
`
const StyledUl = styled.ul`
  padding-left: 1.25rem;
  margin-top: 0;
  li {
    line-height: 1.75rem;
  }
`
const StyledOl = styled.ol`
  padding-left: 1.25rem;
  margin-top: 0;
  li {
    line-height: 1.75rem;
  }
`
const StyledInlineMark = styled.span`
  font-family: 'menlo';
  background-color: ${theme.palette.grey[200]};
  border-radius: 0.25rem;
  color: ${theme.palette.primary.main};
  padding: 0.075rem 0.25rem;
`
const StyledA = styled.a`
  color: ${theme.palette.primary.main};
  &:hover {
    text-decoration: underline;
  }
`
const StyledP = styled.p`
  margin: 0;
  line-height: 1.75rem;
`
const StyledCodeBlock = styled(SyntaxHighlighter)`
  font-size: 1rem;
  margin: 0.5rem 0;
`