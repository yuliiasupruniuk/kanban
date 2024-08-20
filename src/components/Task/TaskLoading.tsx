import { Skeleton } from "@mui/material";

const TaskListLoading = () => {
  const skeletons = Array.from({ length: 5 });

  return (
    <div>
      {skeletons.map((_, index) => (
        <Skeleton key={index} height={'7.875rem'} style={{ marginBottom: '1rem' }} />
      ))}
    </div>
  );
};

export default TaskListLoading;
