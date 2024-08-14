import { ButtonProps, ButtonType } from "./types";
import "./Button.scss";

const Button = ({ label, type = ButtonType.Primary, icon }: ButtonProps) => {
  return (
    <button className={`button ${type}`}>
      <img src={icon} className="icon" alt="" />
      {label}
    </button>
  );
};

export default Button;
