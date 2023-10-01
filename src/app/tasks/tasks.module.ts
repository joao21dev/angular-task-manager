import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './shared';
import { ListTaskComponent } from './list';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ListTaskComponent, AddComponent, EditComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TaskService],
})
export class TasksModule {}
