import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { Tag } from "./Tag"

export const PostBlock = ({ title = '', description = '', collection = '', slug = '', imageUrl = '', imageAlt = '', tags = [] } = {}) => {
  return (
    <StyledA href={`/${collection}/${slug}`}>
      <StyledCard>
        <StyledImage src={imageUrl} alt={imageAlt} />
        <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
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
PostBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  collection: PropTypes.string,
  slug: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

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
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
const StyledDescription = styled.p`
  margin-top: 0.5rem;
`;
const StyledTagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`