import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { SimpleForm } from './components/simple-form/simple-form';
import { DynamicForm } from './components/dynamic-form/dynamic-form';

export const routes: Routes = [
  {path: '', component: Home },
  {path: 'simple-form', component: SimpleForm},
  {path: 'dynamic-form', component: DynamicForm},
];
