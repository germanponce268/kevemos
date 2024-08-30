import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TeleComponent } from './tele/tele.component';

export const routes: Routes = [
    {path:'main', loadComponent: ()=> import('./main/main.component').then(c=>c.MainComponent)
    },
    {
        path:'',
        redirectTo:'main',
        pathMatch: 'full'
    }


];
