import { Routes } from '@angular/router';
import { ListTaskComponent } from './list';
import { AddComponent } from './add';
import { EditComponent } from './edit';

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list',
  },
  {
    path: 'tasks/list',
    component: ListTaskComponent,
  },
  {
    path: 'tasks/add',
    component: AddComponent,
  },
  {
    path: 'tasks/edit/:id',
    component: EditComponent,
  },
];
