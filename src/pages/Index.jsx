import React, { useState } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

// Helper function to check if a number is a Mersenne prime exponent
const isMersennePrimeExponent = (exponent) => {
  if (exponent <= 1) return false;
  let number = Math.pow(2, exponent) - 1;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

const Index = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => setInput(event.target.value);

  const checkMersennePrimeExponent = () => {
    const exponent = parseInt(input, 10);
    if (isNaN(exponent)) {
      setResult("Please enter a valid number.");
    } else {
      const isMersenne = isMersennePrimeExponent(exponent);
      setResult(isMersenne ? `The number 2^${exponent} - 1 is a Mersenne prime.` : `The number 2^${exponent} - 1 is not a Mersenne prime.`);
    }
  };

  return (
    <VStack spacing={5} align="center" justify="center" h="100vh">
      <Text fontSize="2xl">Mersenne Prime Exponent Checker</Text>
      <Box>
        <Input placeholder="Enter an exponent" value={input} onChange={handleInputChange} size="md" />
        <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={checkMersennePrimeExponent} ml={2}>
          Check
        </Button>
      </Box>
      <Text>{result}</Text>
    </VStack>
  );
};

export default Index;
