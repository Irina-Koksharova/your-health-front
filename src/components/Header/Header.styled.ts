import styled from "styled-components";

const ContainerStyled = styled.div``;

const WrapperPrimaryStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 36px;
`;

const WrapperSecondaryStyled = styled(WrapperPrimaryStyled)`
  width: 711px;
  margin-bottom: 0;
`;

export { ContainerStyled, WrapperPrimaryStyled, WrapperSecondaryStyled };
