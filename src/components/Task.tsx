import { TaskData } from "./interfaces/Task";
import styles from "./Task.module.css";
import { Check, Trash } from "phosphor-react";

interface TaskProps {
  task: TaskData;
  onToggleComplete: (taskId: number) => void;
  onDelete: (taskId: number) => void;
}

export function Task({ task, onToggleComplete, onDelete }: TaskProps) {
  const taskIdString = String(task.id);

  return (
    <div className={styles.taskItem}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id={taskIdString}
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className={styles.hiddenCheckbox}
        />
        <label
          htmlFor={taskIdString}
          className={`${styles.checkboxVisual} ${
            task.completed ? styles.checkboxChecked : styles.checkboxUnchecked
          }`}
        >
          {task.completed && <Check size={12} weight="bold" />}
        </label>
      </div>

      <p className={`${styles.taskText} ${task.completed ? styles.taskTextCompleted : ''}`}>
        {task.title}
      </p>

      <button
        className={styles.deleteButton}
        title="Deletar tarefa"
        onClick={() => onDelete(task.id)}
      >
        <Trash size={16} />
      </button>
    </div>
  );
}
