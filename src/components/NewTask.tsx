import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";
import { useState } from "react";

interface NewTaskProps {
  onCreateTask: (taskTitle: string) => void;
}

export function NewTask({ onCreateTask }: NewTaskProps) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleCreateTask() {
    onCreateTask(taskTitle);
    setTaskTitle("");
  }
  return (
    <div className={styles.newTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button type="submit" onClick={handleCreateTask}>
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
