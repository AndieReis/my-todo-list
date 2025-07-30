import { Component } from '@angular/core';

interface Task {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  tasks: Task[] = [];

  addTask(newTaskText: string) {
    if (newTaskText && newTaskText.trim() !== '') {
      this.tasks.push({ text: newTaskText.trim(), done: false });
    }
  }

  toggleTaskStatus(toggledTask: Task) {
    const taskFound = this.tasks.find((task) => task.text === toggledTask.text);
    if (taskFound) {
    }
  }

  deleteTaskFromList(taskToDelete: Task) {
    this.tasks = this.tasks.filter((task) => task !== taskToDelete);
    alert(`Tarefa excluída! Agora você tem ${this.qtdeTasks} tarefas.`);
  }

  get listEmpty(): boolean {
    return this.tasks.length === 0;
  }

  get qtdeTasks(): number {
    return this.tasks.length;
  }
  get completedTasks(): Task[] {
    return this.tasks.filter((task) => task.done);
  }

  get completedTasksCount(): number {
    return this.completedTasks.length;
  }
}
