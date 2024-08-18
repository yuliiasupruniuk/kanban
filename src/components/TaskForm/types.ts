import { TaskStatus } from "../Column/types";
import { Task } from "../Task/types";

export type TaskFormProps = {
    task?: Task
    isOpen: boolean;
    onClose: () => void;
  }
  
  export type  TaskFormValues = {
    title: string;
    description: string;
    status: TaskStatus;
    
  }
  