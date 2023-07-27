import { createGlobalStyle } from "styled-components";
import { palette } from "../theme";
import { typography } from "../theme";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: ${typography.fontSize};
    line-height: ${typography.lineHeight};

    &.a-html {
      position: static;
    }
  }

  body {
    margin: 0;
    height: 100%;
    background: ${palette.bg.default};
    color: ${palette.typo.primary};
    font-weight: 300;
    font-size: 1rem;
    font-family: ${typography.fontFamily};

    &.a-body {
      overflow: auto;
    }
  }

  #root {
    height: 100%;
  }

  a {
    color: ${palette.typo.link};
    text-decoration: none;
  }

  p,
  ul,
  ol,
  pre {
    margin: 0 0 1rem 0;
    max-width: 32rem;
    font-family: ${typography.fontFamily};
    line-height: 1.5;

    &:last-child {
      margin-bottom: 0;
    }
  }

  pre {
    white-space: pre-wrap;
  }

  ul {
    padding-left: 1.5rem;

    li[data-marker] {
      padding-left: 0.8rem;
      &::marker {
        content: attr(data-marker);
      }
    }
  }

  hr {
    height: 2px;
    margin: 1.5rem -1.5rem;
    border: none;
    background-color: ${palette.bg.border};

    @media only screen and (max-width: 768px) {
      margin: 1rem 0rem;
    }
  }
`;
