import { createContext, useState } from 'react';
import { Task } from '../interface/task';

interface TaskContext {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleDone: (id: string) => void;
}

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TaskContext = createContext<TaskContext>({} as TaskContext);

export function TaskProvider({ children }: props) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    const checkTaskInList = tasks.some(
      (t) => t.title.toLocaleLowerCase() === task.title.toLocaleLowerCase()
    );
    if (checkTaskInList) return;
    setTasks([task, ...tasks]);
  };

  const toggleDone = (id: string) => {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
