import styled from "@emotion/styled";
import { Chip } from "@mui/material"

export const Tag = (props) => {
  const {label} = props

  return <StyledChip label={label} />
}

const StyledChip = styled(Chip)`
  border-radius: 0.25rem;
  font-family: monospace, sans-serif;
`