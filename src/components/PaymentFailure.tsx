import { FC } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { Box, Heading, Text } from '@chakra-ui/react';

interface PaymentFailurePageProps {
  errorMessage: string;
}

const PaymentFailurePage: FC<PaymentFailurePageProps> = ({ errorMessage }) => {
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
      <CloseIcon boxSize={12} color="red.500" marginBottom="1rem" />
      <Heading as="h1" size="xl" marginBottom="1rem">
        Payment Failed
      </Heading>
      <Text fontSize="lg">Sorry, your payment could not be processed.</Text>
    </Box>
  );
};

export default PaymentFailurePage;
