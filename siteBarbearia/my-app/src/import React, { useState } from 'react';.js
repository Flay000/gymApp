import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';

function App() {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [imc, setImc] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handlePeso = (e) => {
    setPeso(e.target.value);
  };
  
  const handleNome = (e) => {
    setNome(e.target.value);
  };

  const handleAltura = (e) => {
    setAltura(e.target.value);
  };

  const calcIMC = (e) => {
    e.preventDefault();
    
    if (peso && altura && nome) {
      const alturaEmMetros = altura / 100;
      const imcValue = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
      setImc(imcValue);
      setShowResult(true);
    }
  };
  
  return (
    <Box bg={'green'} width={'100%'} height={500} rounded={'lg'}>
      <Flex rounded={''} display={'flex'} flexDirection='column' width={'100%'} mr={50} alignItems={'center'}>
        <FormControl>
          <FormLabel>
            Nome
          </FormLabel>
          <Input type='text' onChange={handleNome} value={nome} />
        </FormControl>
        <FormControl>
          <FormLabel>
            Idade
          </FormLabel>
          <Input type='number' onChange={(e) => setIdade(e.target.value)} value={idade} />
        </FormControl>
        <FormControl>
          <FormLabel>
            Altura (cm)
          </FormLabel>
          <Input type='number' onChange={handleAltura} value={altura} />
        </FormControl>
        <FormControl>
          <FormLabel>
            Peso (kg)
          </FormLabel>
          <Input type='number' onChange={handlePeso} value={peso} />
        </FormControl>
        <Button type='submit' onClick={calcIMC}>Calcular</Button>
        
        {showResult && (
          <Box mt={4} textAlign="center">
            <Text>Resultado</Text>
            <Text>IMC: {imc}</Text>
            <Text>Nome: {nome}</Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default App;
