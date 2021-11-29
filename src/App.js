import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import {Container, Typography} from '@material-ui/core';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="xs">
        <Typography variant="h4" component="h1" align="center">Formulário de cadastro</Typography>
        <FormularioCadastro onSubmit={onSubmit} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function onSubmit(dados) {
    console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido: false, texto: "CPF deve ter 11 digitos."}
  }
  else{
    return {valido: true, texto: ""}
  }
}

export default App;
