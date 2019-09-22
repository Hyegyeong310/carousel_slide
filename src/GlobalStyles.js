import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    :root {
        font-size: 10px;
    }
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overflow-x: hidden;
        width: 100%;
        height: 100%;
    }
    @media all and (max-width: 420px) {
        :root {
            font-size: 8px;
        }
      }
`;

export default GlobalStyles;
