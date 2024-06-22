import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { Tag } from "./Tag"

export const PostBlock = (props) => {
  const { title, content, url, imageUrl, imageAlt, tags } = props

  return (
    <StyledA href={url}>
      <StyledCard>
        <StyledImage src={imageUrl} alt={imageAlt} />
        <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{content}</StyledDescription>
          <StyledTagsContainer>
            {tags.map(tag => (
              <Tag label={tag} />
            ))}
          </StyledTagsContainer>
        </StyledTextContainer>
      </StyledCard>
    </StyledA>
  );
};

const StyledA = styled.a`
  text-decoration: none;
`;
const StyledCard = styled(Card)`
  width: 100%;
  padding: 0.5rem 2rem;
  box-sizing: border-box;
  &.MuiPaper-root {
    box-shadow: none;
    display: flex;
    gap: 2rem;
  }
`;
const StyledImage = styled.img`
  width: 20rem;
`
const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const StyledTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;
const StyledDescription = styled.p`
  margin-top: 0.5rem;
`;
const StyledTagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`