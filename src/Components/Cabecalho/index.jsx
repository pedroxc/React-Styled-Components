import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";

import {StyledHeader,Logo ,BtnCabecalho} from './styled'


const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="https://google.com">
          Sair
        </BtnCabecalho>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
