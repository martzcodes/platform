import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout.component';
import { NavItemComponent } from './components/nav-item.component';
import { SidenavComponent } from './components/sidenav.component';
import { ToolbarComponent } from './components/toolbar.component';
import { AppComponent } from './containers/app.component';
import { NotFoundPageComponent } from './containers/not-found-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, NavItemComponent, SidenavComponent, ToolbarComponent, AppComponent, NotFoundPageComponent]
})
export class CoreModule { }
