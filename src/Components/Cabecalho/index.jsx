import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";

import { StyledHeader, Logo, BtnCabecalho } from "./styled";

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho
          primary
          href="https://github.com/pedroxc/React-Styled-Components"
        >
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="https://pedrocoelhoportfolio.netlify.app/trabalhos">
          Sair
        </BtnCabecalho>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
