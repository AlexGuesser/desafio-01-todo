import { useState } from "react";
import styles from "./App.module.css";
import logo from "./assets/img/logo.png";
import { TaskData } from "./components/interfaces/Task";
import { NewTask } from "./components/NewTask";
import { Task } from "./components/Task";
import { TasksSummary } from "./components/TasksSummary";
import "./global.css";

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([
    {
      id: Math.random(),
      title: "Estudar React",
      completed: false,
    },
    {
      id: Math.random(),
      title: "Estudar React",
      completed: true,
    },
  ]);

  function handleToggleComplete(taskId: number) {
    const task = tasks.filter((task) => task.id === taskId)[0];
    task.completed = !task.completed;
    setTasks([...tasks.filter((task) => task.id !== taskId), task]);
  }

  function handleDelete(taskId: number) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleCreateTask(taskTitle: string) {
    setTasks([
      { id: Math.random(), title: taskTitle, completed: false },
      ...tasks,
    ]);
  }

  return (
    <>
      <div className={styles.header}>
        <img src={logo} alt="Logo" />
      </div>
      <NewTask onCreateTask={handleCreateTask} />
      <TasksSummary
        taskCreated={tasks.length}
        taskDone={tasks.filter((task) => task.completed).length}
      />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
}

export default App;
