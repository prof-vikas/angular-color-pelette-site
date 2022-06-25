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
import { SidePanelComponent } from './navBar/colors/side-panel/side-panel.component';
import { NavComponent } from './navBar/colors/sidePanel/nav/nav.component';
import { BodyComponent } from './navBar/colors/sidePanel/body/body.component';
import { SideWebComponent } from './navBar/colors/sidePanel/side-web/side-web.component';
import { InnerFooterComponent } from './navBar/colors/sidePanel/inner-footer/inner-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsComponent,
    ContactComponent,
    ColorsComponent,
    ExploreComponent,
    NavbarComponent,
    FooterComponent,
    SidePanelComponent,
    NavComponent,
    BodyComponent,
    SideWebComponent,
    InnerFooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
