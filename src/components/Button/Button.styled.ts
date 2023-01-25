import styled from "styled-components";
import { colors } from "../../helpers/css-variables";

interface Props {
  actionButton: boolean;
}

const { accentBlue, accentWhite } = colors;

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props: Props) =>
    props.actionButton ? "15px 31px" : "20px 39px"};
  font-size: ${(props: Props) => (props.actionButton ? "14px" : "16px")};
  line-height: ${(props: Props) => (props.actionButton ? "14px" : "16px")};
  color: ${accentWhite};
  background-color: ${accentBlue};
  border: 2px solid ${accentBlue};
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    color: ${accentBlue};
    background-color: ${accentWhite};
  }
`;

export { ButtonStyled };
