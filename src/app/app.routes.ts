import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { loginGuard } from './guards/login.guard';
import { PrivateComponent } from './components/private/private.component';
import { KanbanComponent } from './components/kanban/kanban.component';

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
    path: 'kanban',
    component: KanbanComponent,
    title: 'kanban',
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
