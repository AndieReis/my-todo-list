import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Task {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  @Input() task: Task = { text: '', done: false };

  @Output() taskToggled = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<Task>();

  toggleDone() {
    this.task.done = !this.task.done;
    this.taskToggled.emit(this.task);
  }

  deleteThisTask() {
    this.taskDeleted.emit(this.task);
  }
}
