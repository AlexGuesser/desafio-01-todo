import styles from "./TasksSummary.module.css";

interface TasksSummaryProps {
  taskCreated: number;
  taskDone: number;
}

export function TasksSummary({ taskCreated, taskDone }: TasksSummaryProps) {
  return (
    <div className={styles.tasksSummary}>
      <div className={styles.tasksCreated}>
        <strong>Tarefas criadas</strong>
        <span>{taskCreated}</span>
      </div>
      <div className={styles.tasksDone}>
        <strong>Tarefas concluídas</strong>
        <span>{taskDone}</span>
      </div>
    </div>
  );
}
