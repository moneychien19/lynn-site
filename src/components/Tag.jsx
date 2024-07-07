import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Chip } from '@mui/material'

export const Tag = ({ label = '' } = {}) => {
  return <StyledChip label={label} />
}
Tag.propTypes = {
  label: PropTypes.string,
}

const StyledChip = styled(Chip)`
  border-radius: 0.25rem;
  font-family: monospace, sans-serif;
`
