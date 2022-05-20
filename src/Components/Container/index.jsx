import React from "react";

import {Titulo,Container,Conteudo} from "./styled";
import Conta from "../Conta";
import Extrato from "../Extrato";

export default () => {
  return (
    <Container>
      <Titulo>Olá Pedro!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato/>
      </Conteudo>
    </Container>
  );
};

