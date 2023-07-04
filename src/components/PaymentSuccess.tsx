import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useRouter } from 'next/router';

const PaymentSuccessPage: FC = () => {
  const router = useRouter();
  const { orderId } = router.query;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      padding="1rem"
      textAlign="center"
    >
      <CheckCircleIcon boxSize="6rem" color="green.500" marginBottom="1rem" />
      <Heading as="h1" size="xl" marginBottom="1rem">
        Payment Successful
      </Heading>
      <Text fontSize="lg" marginBottom="1rem">
        Thank you for your payment!
      </Text>
      {orderId && (
        <Text fontSize="md">
          Order ID: <strong>{orderId}</strong>
        </Text>
      )}
    </Box>
  );
};

export default PaymentSuccessPage;
