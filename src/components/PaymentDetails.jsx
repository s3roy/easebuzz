import Script from 'next/script';
import { useEffect } from 'react';

const EasebuzzPage = () => {
  useEffect(() => {
    const handleClick = () => {
      var easebuzzCheckout = new EasebuzzCheckout('KBG1O1BFYM', 'prod');
      var options = {
        access_key:
          '790f710a2ccc372a829f32a71335d13acfec3b0c327cb12a2882de79c3db4a80',
        onResponse: (response) => {
          console.log(response);
        },
        theme: '#123456',
      };
      easebuzzCheckout.initiatePayment(options);
    };

    document
      .getElementById('ebz-checkout-btn')
      .addEventListener('click', handleClick);

    return () => {
      document
        .getElementById('ebz-checkout-btn')
        .removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <button id="ebz-checkout-btn">Proceed to Pay</button>
      <Script src="https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/easebuzz-checkout.js" />
    </>
  );
};

export default EasebuzzPage;
