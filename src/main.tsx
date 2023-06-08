import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TaskProvider } from './context/task.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TaskProvider>
    <App />
  </TaskProvider>
);
