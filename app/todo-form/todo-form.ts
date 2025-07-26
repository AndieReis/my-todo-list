import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  standalone: false,
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  newTask: string = '';
  showErrorMessage: boolean = false;
  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim()) {
      this.taskAdded.emit(this.newTask.trim());
      this.newTask = '';
      this.showErrorMessage = false;
    } else {
      this.showErrorMessage = true;
    }
  }
}
