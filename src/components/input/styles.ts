import styled from "styled-components";
import { palette, typography } from "../../shared/styles/theme";

export const Input = styled.input`
  width: 100%;
  padding: 0.4rem 0.8rem;
  background-color: ${palette.bg.secondary};
  border: none;
  border-radius: 0.2rem;
  color: ${palette.typo.secondary};
  font-size: ${typography.fontSize};
  transition: color 0.1s, border-color 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    color: ${palette.typo.primary};
    outline: 2px solid ${palette.brand};
  }
`;
