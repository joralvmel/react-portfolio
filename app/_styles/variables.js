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
      --color-accent: #0961b9;
      --color-accent-hover: #084787;
      --color-image-overlay: rgba(230, 230, 230, 0.8);
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
      --color-accent: #479ff6;
      --color-accent-hover: #77b7f7;
      --color-image-overlay: rgba(25, 25, 25, 0.8);
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

    --transition-background: background-color 0.3s ease;
    --transition-color: color 0.3s ease;
    --transition-image: all 0.6s ease;
  }
`;

export default variables;
