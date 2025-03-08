import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [ // AppComponent should be declared here
    AppComponent,
    LoginComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule  // Add RouterModule to fix 'router-outlet' issue
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap AppComponent properly
})
export class AppModule { }
