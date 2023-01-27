import styled from "styled-components";

const ContainerS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1200px;
  height: 100px;
  margin: 0 auto 50px;
`;

const WrapperPrimaryS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const WrapperSecondaryS = styled(WrapperPrimaryS)`
  width: 711px;
`;

export { ContainerS, WrapperPrimaryS, WrapperSecondaryS };
