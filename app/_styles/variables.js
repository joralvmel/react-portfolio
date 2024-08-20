import { css } from "styled-components";

const variables = css`
  :root {
    // Colors
    &,
    &.light-mode {
      --color-text: #242424;
      --color-text-light: #121212;
      --color-header: #dedede;
      --color-background: #d9d9d9;
      --color-primary: #878787;
      --color-secondary: #545454;
      --color-tertiary: #bfbfbf;
      --color-quaternary: #b5b5b5;
      --color-accent: #ff3333;
      --color-accent-hover: #cb0000;
    }

    &.dark-mode {
      --color-text: #dbdbdb;
      --color-text-light: #ededed;
      --color-header: #222222;
      --color-background: #262626;
      --color-primary: #777777;
      --color-secondary: #ababab;
      --color-tertiary: #404040;
      --color-quaternary: #494949;
      --color-accent: #cb0000;
      --color-accent-hover: #ff3333;
    }

    //Fonts
    --fs-xxxs: 10px;
    --fs-xxs: 12px;
    --fs-xs: 13px;
    --fs-sm: 14px;
    --fs-md: 16px;
    --fs-lg: 18px;
    --fs-xl: 20px;
    --fs-xxl: 22px;
    --fs-heading: 32px;

    --border-radius: 4px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;
  }
`;

export default variables;
