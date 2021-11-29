import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core/";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          props.onSubmit({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        name="email"
        id="email"
        label="E-mail"
        type="email"
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
        required
      />
      <TextField
        value={senha}
        onBlur={validarCampos}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name="senha"
        id="senha"
        label="Senha"
        type="password"
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary" size="small">
        Proximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
