import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>El mejor Guiso del Día</h1>
      <p>Con el sabor culinario del Estado de Yucatán</p>
      <FeatureButton>Ordenar Ahora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
