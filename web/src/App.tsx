/**
 * Todos os arquivos tsx precisam importar React
 * Para alterar o valor de uma variável é necessário importar o useState
 * O react possui um princípio de imutabilidade, você não consegue alterar uma
 * variável diretamente.
 */
import React, { useState } from 'react';
import './App.css';

import Routes from './routes';

function App() {
  return (
    <Routes />
  )
}

export default App;
