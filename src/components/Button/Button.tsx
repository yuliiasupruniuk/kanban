import { ButtonProps, ButtonType } from "./types";
import "./Button.scss";

const Button = ({ label, type = ButtonType.Primary, icon, className, loading = false, onClick }: ButtonProps) => {
  return (
    <button className={`button ${type} ${className}`} onClick={onClick} disabled={loading}>
      {icon && <img src={icon} className="icon" alt="" />}
      <span className="text-m font-bold">{label}</span>
    </button>
  );
};

export default Button;
