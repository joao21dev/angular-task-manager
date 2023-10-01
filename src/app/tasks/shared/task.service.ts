import { Injectable } from '@angular/core';
import { Task } from './tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  listAll(): Task[] {
    const tasks = localStorage['tasks'];
    return tasks ? JSON.parse(tasks) : [];
  }

  addTask(task: Task): void {
    const tasks = this.listAll();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  findTaskById(id: number): Task {
    const tasks: Task[] = this.listAll();
    return tasks.find((task) => task.id === id);
  }

  editTask(task: Task): void {
    const tasks: Task[] = this.listAll();
    tasks.forEach((item, index, items) => {
      if (task.id === item.id) {
        items[index] = task;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  deleteTask(id: number): void {
    let tasks: Task[] = this.listAll();
    tasks = tasks.filter((task) => task.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  editIsFinished(id: number): void {
    const tasks: Task[] = this.listAll();
    tasks.forEach((item, index, items) => {
      if (id === item.id) {
        items[index].isFinished === !item.isFinished;
      }
    });
  }
}
