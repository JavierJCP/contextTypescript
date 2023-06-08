import React, { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import { useTasks } from './hooks/useTasks';

function App() {
  const [task, setTask] = useState('');
  const { addTask } = useTasks();

  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateTask = e.target.value;
    setTask(updateTask);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      title: task,
      done: false,
    };
    //addTask
    addTask(newTask);
    setTask('');
  };

  return (
    <>
      <header>
        <h1 className='title'>Task App 📝</h1>
        <section className='task__form'>
          <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChangeTask} value={task} />
            <button type='submit'>Add Task</button>
          </form>
        </section>
      </header>

      <main>
        <Tasks />
      </main>
    </>
  );
}

export default App;
