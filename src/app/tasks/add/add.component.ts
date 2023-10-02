import { Component, OnInit, ViewChild } from '@angular/core';
import { Task, TaskService } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  @ViewChild('formTask', { static: true }) formTask: NgForm;
  task: Task;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.task = new Task();
  }

  add(): void {
    if (this.formTask.valid) {
      this.taskService.addTask(this.task);
      this.router.navigate(['/tasks']);
    }
  }
}
