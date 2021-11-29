import React, { useState } from "react";
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@material-ui/core/";

function FormularioCadastro(props) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const [erros, setErros] = useState({
    cpf: {
      valido: true,
      texto: "",
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        autoFocus={true}
        id="nome"
        label="Nome"
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
      />

      <TextField
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const ehValido = props.validarCPF(event.target.value);
          setErros({cpf: ehValido});
        }}
        id="cpf"
        label="CPF"
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
            size="small"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
            size="small"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary" size="small">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
