import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: 'users', canActivate: [AuthGuard], component: UsersComponent},
  { path: 'users/:id', canActivate: [AuthGuard], component: UserDetailsComponent},
  { path: 'search_results', canActivate: [AuthGuard], component: SearchResultsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
