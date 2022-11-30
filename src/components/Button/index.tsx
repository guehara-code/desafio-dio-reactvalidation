import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, valid, onClick }: IButtonProps) => {
  console.log({valid});
  return <ButtonContainer onClick={onClick} disabled={!valid}>{title}</ButtonContainer>;
 };

export default Button;
