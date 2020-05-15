import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LanderComponent } from './lander/lander.component';
import { AuthguardGuard } from './authguard.guard';


const routes: Routes = [
  {path: '', component: AppComponent, children : 
  [
    {path: 'lander', component: LanderComponent}
  ]},
  {path: 'console', loadChildren: () => import('./modules/console/console.module').then(n => n.ConsoleModule), canLoad: [AuthguardGuard]},
  {path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(n => n.SignupModule)},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthguardGuard]
})
export class AppRoutingModule { }
