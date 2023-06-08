import { useTasks } from '../hooks/useTasks';

function Tasks() {
  const { tasks, toggleDone } = useTasks();

  const handleChange = (id: string) => {
    toggleDone(id);
  };

  return !tasks?.length ? (
    <h2>No pending tasks</h2>
  ) : (
    <ul className='tasks'>
      {tasks?.map((task) => (
        <li key={task.id} className='task'>
          <div>
            <strong>{task.title.toLocaleLowerCase()}</strong>
            <input
              type='checkbox'
              onChange={() => handleChange(task.id)}
              checked={task.done}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
