import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core/";

function DadosEntrega(props) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form onSubmit={
      (event) =>{
        event.preventDefault();
        const entrega = {cep, endereco, numero, estado, cidade};
        props.onSubmit(entrega);
        }
    }>
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        size="small"
        margin="dense"
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        id="numero"
        label="Número"
        type="Number"
        variant="outlined"
        size="small"
        margin="dense"
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        size="small"
        margin="dense"
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        size="small"
        margin="dense"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="small"
        fullWidth
      >
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
