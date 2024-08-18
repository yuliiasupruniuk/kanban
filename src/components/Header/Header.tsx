import { default as LogoLight } from "../../assets/icons/logo-light.svg";
import { default as AddIcon } from "../../assets/icons/add-task-mobile.svg";

import Button from "../Button/Button";
import { ButtonType } from "../Button/types";
import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";

const Header = () => {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  return (
    <>
      <div className="h-24 px-6 flex justify-between bg-secondary items-center border-b-2 border-dark">
        <img src={LogoLight} alt="Logo Dark" className="h-6 w-auto" />
        <Button
          label="Add new task"
          type={ButtonType.Primary}
          icon={AddIcon}
          onClick={() => setIsCreateDialogOpen(true)}
        />
      </div>
      <TaskForm
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
      />
    </>
  );
};

export default Header;
