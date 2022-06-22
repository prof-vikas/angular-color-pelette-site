import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './navBar/home/home.component';
import { BlogsComponent } from './navBar/blogs/blogs.component';
import { ContactComponent } from './navBar/contact/contact.component';
import { ColorsComponent } from './navBar/colors/colors.component';
import { ExploreComponent } from './navBar/explore/explore.component';
import { NavbarComponent } from './navBar/navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsComponent,
    ContactComponent,
    ColorsComponent,
    ExploreComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
