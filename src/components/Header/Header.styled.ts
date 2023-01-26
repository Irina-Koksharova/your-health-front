import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1200px;
  height: 100px;
  margin: 0 auto 50px;
`;

const WrapperPrimaryStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const WrapperSecondaryStyled = styled(WrapperPrimaryStyled)`
  width: 711px;
`;

export { ContainerStyled, WrapperPrimaryStyled, WrapperSecondaryStyled };
