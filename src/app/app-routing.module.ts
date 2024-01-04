import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserContainerComponent} from "./features/user/components/user-container/user-container.component";

const routes: Routes = [
  { path: 'users', component: UserContainerComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
