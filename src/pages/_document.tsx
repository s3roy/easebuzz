import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <Script src="https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/easebuzz-checkout.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
