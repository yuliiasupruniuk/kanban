import { ButtonProps, ButtonType } from "./types";
import styles from "./Button.module.scss";
import { CircularProgress } from "@mui/material";

const Button = ({
  label,
  type = ButtonType.Primary,
  icon,
  className,
  isLoading = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${className}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {icon && !isLoading && <img src={icon} className={styles.icon} alt="" />}
      {isLoading && <CircularProgress size={16} />}
      <span className="text-m font-bold">{label}</span>
    </button>
  );
};

export default Button;
