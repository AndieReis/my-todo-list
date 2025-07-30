import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { TodoForm } from './todo-form/todo-form';
import { TodoItem } from './todo-item/todo-item';
import { TodoList } from './todo-list/todo-list';

@NgModule({
  declarations: [App, TodoForm, TodoList, TodoItem, TodoList],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
