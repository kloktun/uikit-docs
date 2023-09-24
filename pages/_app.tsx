import '../styles/globals.css';
import { MDXProvider } from '@mdx-js/react';

function App({ Component, pageProps }: any) {
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default App;

