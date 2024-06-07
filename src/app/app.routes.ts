import { Routes } from '@angular/router';

export const routes: Routes = [
    {   path:'', redirectTo: 'home', pathMatch: 'full'},
    {   path:'home', loadChildren: () => import('./modules').then(m=>m.HomeModule)}
];
