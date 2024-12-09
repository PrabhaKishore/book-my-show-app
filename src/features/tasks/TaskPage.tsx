import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchTasksStart } from "../../features/tasks/taskSlice";

const TaskPage = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector(
    (state: RootState) => state.rootReducer.tasks
  );

  useEffect(() => {
    dispatch(fetchTasksStart());
  }, [dispatch]);

  return (
    <div>
      <h1>Task List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
