import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const PostBlock = ({ title, content, url }) => {
  return (
    <StyledA href={url}>
      <StyledCard variant="outlined">
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{content}</StyledDescription>
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
`;
const StyledTitle = styled.h1`
  font-size: 1.75rem;
  color: #4a55a2;
`;
const StyledDescription = styled.p`
  color: #262a56;
`;
