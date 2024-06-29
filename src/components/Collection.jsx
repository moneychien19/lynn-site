import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { collectionsMapping } from '../models/collectionsMapping';

export const Collection = ({ collection }) => {
  return (
    <StyledCollectionContainer id="collection" href={`/${collection}`}>
      <MdOutlineCollectionsBookmark />
      <span>{collectionsMapping[collection]}</span>
    </StyledCollectionContainer>
  )
}
Collection.propTypes = {
  collection: PropTypes.string,
}

const StyledCollectionContainer = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 0.5rem 0;
  color: #666;
  text-decoration: none;
`