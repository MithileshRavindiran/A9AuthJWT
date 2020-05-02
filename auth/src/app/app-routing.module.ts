import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { Authguard } from './services/authguard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { BidComponent } from './bid/bid.component';
import { BidAuthGuard } from './services/bid-auth-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [Authguard, AdminAuthGuard] },
  {path: 'bid', component:BidComponent, canActivate:[Authguard,BidAuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'no-access', component: NoAccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
