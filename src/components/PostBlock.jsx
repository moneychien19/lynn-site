import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { collectionsMapping } from '../models/collectionsMapping';
import { Tag } from "./Tag"

export const PostBlock = ({ title = '', description = '', collection = '', slug = '', imageUrl = '', imageAlt = '', tags = [] } = {}) => {
  return (
    <StyledCard>
      <StyledImage src={imageUrl} alt={imageAlt} />
      <StyledTextContainer>
        <StyledTitle href={`/${collection}/${slug}`}>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledTagsAndCollectionContainer>
          {tags.map(tag => (
            <Tag label={tag} />
          ))}
          {collection !== 'posts' && (
            <StyledCollectionContainer href={`/${collection}`}>
              <MdOutlineCollectionsBookmark />
              <span>{collectionsMapping[collection]}</span>
            </StyledCollectionContainer>
          )}
        </StyledTagsAndCollectionContainer>
      </StyledTextContainer>
    </StyledCard>
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
const StyledTitle = styled.a`
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: inherit;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: inherit;
  }
`;
const StyledDescription = styled.p`
  margin-top: 0.5rem;
`;
const StyledCollectionContainer = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 0.5rem 0 0.5rem 0.5rem;
  color: #666;
  text-decoration: none;
`
const StyledTagsAndCollectionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`