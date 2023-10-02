import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.listAll();
  }

  delete($event: any, task: Task): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + task.name + '"?')) {
      this.taskService.deleteTask(task.id);
      this.tasks = this.taskService.listAll();
    }
  }

  changeStatus(task: Task): void {
    if (confirm('Deseja alterar o status da tarefa "' + task.name + '"?')) {
      this.taskService.editIsFinished(task.id);
      this.tasks = this.taskService.listAll();
    }
  }
}
