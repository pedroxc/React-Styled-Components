import { corPrimaria } from "../UI/variavies";
import styled from 'styled-components';


export const BtnCabecalho = styled.a`
text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  color: white;
  background: ${(props) => props.primary ? "white" : corPrimaria};
  color: ${(props) => props.primary ? corPrimaria : "white"}
  `;

export const StyledFooter = styled.nav`
 background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
div{
  font-size:10px;
  flex-direction: column;
  align-items: flex-end;
}
`;
export const Logo = styled.img`
 height: 50px;
  width: 50px;
`;

