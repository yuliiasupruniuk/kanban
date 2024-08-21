import { default as LogoLight } from "assets/icons/logo-light.svg";
import { default as AddIcon } from "assets/icons/add-icon.svg";

import { ButtonType } from "components/Button/types";
import Button from "components/Button/Button";
import useTaskForm from "components/TaskForm/hook/useTaskForm";

const Header = () => {
  const { openForm: openCreateTaskDialog } = useTaskForm();

  return (
    <div className="h-24 px-6 flex justify-between bg-secondary items-center border-b-2 border-dark">
      <img src={LogoLight} alt="Logo Dark" className="h-6 w-auto" />
      <Button
        label="Add new task"
        btnStyle={ButtonType.Primary}
        icon={AddIcon}
        onClick={() => openCreateTaskDialog()}
      />
    </div>
  );
};

export default Header;
