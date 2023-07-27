import styled from "styled-components";
import { palette } from "../../shared/styles/theme";

const linkBorderSize = "1px";

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  box-shadow: inset 0 -${linkBorderSize} 0 0 ${palette.typo.link};
  transition: background-color 0.1s ease-out, border-radius 0.1s ease-out;
  color: ${palette.typo.link};

  &:link,
  &:visited,
  &:active {
    color: ${palette.typo.link};
  }

  &:focus {
    outline: none;
  }

  &:focus,
  &:hover {
    background-color: ${palette.typo.link};
    color: ${palette.bg.default};
    box-shadow: inset 0 -1 * ${linkBorderSize} 0 0 ${palette.typo.link};
    border-radius: 2px;
  }
`;

export const LinkIcon = styled.span`
  display: inline-flex;
  margin-left: 0.4rem;
  opacity: 0.4;
`;
