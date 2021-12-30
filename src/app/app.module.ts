import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { UsersComponent } from './pages/users/users.component';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserAddComponent } from './pages/users/user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlannerComponent } from './pages/planner/planner.component';
import { PlannerAddComponent } from './pages/planner/planner-add/planner-add.component';
import { PlannerListComponent } from './pages/planner/planner-list/planner-list.component';
import { PlannerItemComponent } from './pages/planner/planner-item/planner-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HeaderComponent,
    AboutComponent,
    UsersComponent,
    UserListComponent,
    UserAddComponent,
    PlannerComponent,
    PlannerAddComponent,
    PlannerListComponent,
    PlannerItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
