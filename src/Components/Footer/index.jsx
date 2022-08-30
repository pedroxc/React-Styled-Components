import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";

import { StyledFooter, Logo } from "./styled";

const Cabecalho = () => {
  return (
    <StyledFooter>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <p>
          Página criada durante curso:REACT: ABSTRAINDO SEU CSS COM STYLED
          COMPONENTS da Alura
        </p>
        <p>
          <a
            href={
              "https://cursos.alura.com.br/certificate/pedroxaviercoelho/react-styled-components"
            }
          >
            Certificado
          </a>
        </p>
        <p>
          Feito por:
          <a href={"https://pedrocoelhoportfolio.netlify.app/"}>
            Pedro Xavier Coelho
          </a>
        </p>
      </div>
    </StyledFooter>
  );
};

export default Cabecalho;
