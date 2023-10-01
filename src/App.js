import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tarefa 1', completed: false },
    { id: 2, title: 'Tarefa 2', completed: true },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const addTask = () => {
    if (newTaskTitle.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        title: newTaskTitle,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  const markAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeCompletedTasks = () => {
    const filteredTasks = tasks.filter((task) => !task.completed);
    setTasks(filteredTasks);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Gerenciador de Tarefas</h1>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? 'completed' : ''}
            >
              {task.title}
              <button onClick={() => markAsCompleted(task.id)}>
                {task.completed ? 'Desfazer' : 'Concluir'}
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Nova Tarefa"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTask();
            }
          }}
        />
        <button className="adicionar" onClick={addTask}>Adicionar Tarefa</button>
        <div className="button-container">
          <button
            className="remove-completed" onClick={removeCompletedTasks}>
            Remover Tarefas Concluídas
          </button>
          <footer className="footer">
            <div>1ª Web Atividade &copy; 2023 - Todos os direitos reservados.</div>
            <div>Desenvolvido com react <img src={logo} className="footer-logo" alt="logo" /></div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
