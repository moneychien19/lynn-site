import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { collectionsMapping } from '../models/collectionsMapping';
import { neutralColor } from '../theme';

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
  gap: 0.25rem;
  align-items: center;
  margin: 0.5rem 0;
  color: ${neutralColor[500]};
  text-decoration: none;
  font-size: 0.875rem;
`