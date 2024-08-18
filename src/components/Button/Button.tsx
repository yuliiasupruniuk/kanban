import { ButtonProps, ButtonType } from "./types";
import styles from "./Button.module.scss";

const Button = ({ label, type = ButtonType.Primary, icon, className, loading = false, onClick }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[type]} ${className}`} onClick={onClick} disabled={loading}>
      {icon && <img src={icon} className={styles.icon} alt="" />}
      <span className="text-m font-bold">{label}</span>
    </button>
  );
};

export default Button;
