import React, { useState } from "react";
import img from '../src/focus.jpg';
import { Text, Box, Center, FormControl, FormLabel, Input, Flex, Button } from "@chakra-ui/react";

export default function CalcIMC() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [legenda, setLegenda] = useState(' ');


  function handlePeso(e) {
    setPeso(e.target.value);
  }

  function handleAltura(e) {
    setAltura(e.target.value);
  }

  function calcuImc(e) {
    e.preventDefault();
    const alturaMetros = altura / 100;
    const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    setImc(imcCalculado);
    definirLegenda(imcCalculado);
  }

  function definirLegenda(imcCalculado) {
    if (imcCalculado < 16) {
      setLegenda('Severamente abaixo do peso');
    } else if (imcCalculado >= 16 && imcCalculado < 18.5) {
      setLegenda('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      setLegenda('Peso normal');
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      setLegenda('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado < 35) {
      setLegenda('Obesidade grau 1');
    } else if (imcCalculado >= 35 && imcCalculado < 40) {
      setLegenda('Obesidade grau 2');
    } else {
      setLegenda('Obesidade grau 3 (obesidade mórbida)');
    }
  }

  return (
    <>
      <Box
        height={'100vh'}
        width={'full'}
        backgroundImage={img}
        textColor={'white'}
        fontFamily={'fantasy'}
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        backgroundRepeat={'no-repeat'}
        style={{ filter: 'brightness(0.9) contrast(1.1)' }}
        opacity={10}
      >
        <Center>
          <Text fontFamily={'BebasNeue'} color={'#9c58e0'}>CALCULE SEU IMC (Indice de Massa Corporal)</Text>
        </Center>
        <Flex gap={50} display={'flex'} flexDirection={'column'} textAlign={'center'}>
       
          <Flex gap={50} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <FormControl>
              <FormLabel fontSize={'20'} textColor={'black'} textAlign={'center'} mb='5px'>
                PESO
              </FormLabel>
              <Input
                bg={'gray'}
                borderColor={'black'}
                type="number"
                height={'20px'}
                value={peso}
                width='200px'
                onChange={handlePeso}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={'20'} textColor={'black'} textAlign={'center'} mb='5px'>
                ALTURA
              </FormLabel>
              <Input
                bg={'gray'}
                borderColor={'black'}
                type="number"
                height={'20px'}
                value={altura}
                width='200px'
                rounded={''}
                onChange={handleAltura}
              />
            </FormControl>
          </Flex>
        </Flex>
        <Flex display={'flex'} justifyContent={'center'} flexDirection={'column'}>
          <Center>
            <Button mt={10} colorScheme="red" type='submit' onClick={calcuImc}>Calcular</Button>
          </Center>
          <Center>
            <Text>Resultado</Text>
          </Center>
          <Center>
            <Text color="white" fontSize={'large'} fontFamily={'fantasy'} fontStyle={'oblique'}>{nome}</Text>
            <Text color={'black'}>{imc}</Text>
            <Text color={'black'}>{legenda}</Text>
          </Center>
        </Flex>
      </Box>
      <Box height={'100vh'} width={'full'} bg={'gray'}>
        <Center>
          <Text display={'flex'} height={'30px'} width={'100%'} bg={'#5858a7'} justifyContent={'center'} alignItems={'center'}>O QUE É IMC</Text>
        </Center>
        <Flex>
          <Text>
            O Índice de Massa Corporal (IMC) é uma medida que utiliza o peso e a altura de uma pessoa para determinar se ela está com um peso saudável. O cálculo é feito dividindo o peso (em quilogramas) pela altura (em metros) ao quadrado. O resultado desse cálculo é um número que se encaixa em diferentes categorias, indicando se a pessoa está abaixo do peso, com peso normal, sobrepeso ou obesa.
            <br /><br />
            A tabela do IMC geralmente é dividida da seguinte forma:
            <ul>
              <li>Abaixo de 18,5: Abaixo do peso</li>
              <li>18,5 - 24,9: Peso normal</li>
              <li>25,0 - 29,9: Sobrepeso</li>
              <li>30,0 - 34,9: Obesidade grau 1</li>
              <li>35,0 - 39,9: Obesidade grau 2</li>
              <li>40,0 ou mais: Obesidade grau 3 (obesidade mórbida)</li>
            </ul>
            Manter um IMC dentro da faixa de peso normal é importante para a saúde geral e bem-estar. Estar acima do peso pode aumentar significativamente o risco de várias condições de saúde, incluindo:
            <ul>
              <li>Doenças cardíacas</li>
              <li>Hipertensão (pressão alta)</li>
              <li>Diabetes tipo 2</li>
              <li>Apneia do sono</li>
              <li>Certos tipos de câncer</li>
              <li>Problemas nas articulações e nos ossos</li>
            </ul>
            Perder peso pode trazer inúmeros benefícios para a saúde. Alguns dos principais motivos para emagrecer incluem:
            <ul>
              <li>Melhora da saúde cardiovascular: Reduzindo o peso corporal, é possível diminuir a pressão arterial e os níveis de colesterol, diminuindo assim o risco de doenças cardíacas e derrames.</li>
              <li>Controle do diabetes: Emagrecer pode ajudar a controlar os níveis de açúcar no sangue, prevenindo ou gerenciando o diabetes tipo 2.</li>
              <li>Melhora na qualidade do sono: A perda de peso pode aliviar problemas respiratórios como a apneia do sono, melhorando a qualidade do sono.</li>
              <li>Aumento da mobilidade: Reduzir o peso pode diminuir o estresse sobre as articulações, facilitando a movimentação e reduzindo a dor.</li>
              <li>Maior energia e bem-estar: Manter um peso saudável pode aumentar os níveis de energia, melhorar o humor e contribuir para um maior bem-estar geral.</li>
            </ul>
            Adotar hábitos saudáveis, como uma alimentação equilibrada e a prática regular de exercícios físicos, é essencial para alcançar e manter um peso saudável. Consultar profissionais de saúde, como médicos e nutricionistas, pode fornecer orientação personalizada e apoio para uma jornada de emagrecimento bem-sucedida.
          </Text>
        </Flex>
      </Box>
    </>
  );
}

