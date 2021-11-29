import React, { Component } from "react";
import "./App.css";
import { Container, Typography } from "@material-ui/core";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FormularioCadastros from "./components/FormularioCadastro/FormularioCadastro";
import { validarCPF, validarSenha } from "./models/Cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" component="h1" align="center">
          Dados Pessoais
        </Typography>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validarCPF,
            senha: validarSenha,
            nome: validarSenha,
          }}
        >
          <FormularioCadastros onSubmit={onSubmit} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function onSubmit(dados) {
  console.log(dados);
}
export default App;
