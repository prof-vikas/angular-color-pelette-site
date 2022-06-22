import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './navBar/blogs/blogs.component';
import { ColorsComponent } from './navBar/colors/colors.component';
import { ContactComponent } from './navBar/contact/contact.component';
import { ExploreComponent } from './navBar/explore/explore.component';
import { HomeComponent } from './navBar/home/home.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'colors', component : ColorsComponent},
  { path : 'blogs', component : BlogsComponent},
  { path : 'explore', component : ExploreComponent},
  { path : 'contact', component : ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
