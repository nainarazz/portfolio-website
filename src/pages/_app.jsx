import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { CodeBlock } from '../components/code-block/code-block.component';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        color: rgb(34, 36, 38);
        font-family: 'Open Sans', sans-serif;
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Montserrat', sans-serif;
        }

        #__next {
            position: relative;
            min-height: 100%;
        }
    }
`;

const components = {
    pre: props => <div {...props} />,
    code: CodeBlock,
};

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <MDXProvider components={components}>
                <Component {...pageProps} />
            </MDXProvider>
        </>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
