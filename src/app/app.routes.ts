import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { loginGuard } from './guards/login.guard';
import { PrivateComponent } from './components/private/private.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home',
  },
  {
    path: 'table',
    component: TableComponent,
    title: 'table',
  },
  {
    path: 'private',
    canActivate: [loginGuard],
    component: PrivateComponent,
    title: 'private',
  },
  {
    path: 'drag-and-drop',
    component: DragdropComponent,
    title: 'drag and drop',
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
