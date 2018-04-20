import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AppComponent } from './containers/app/app.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, NavItemComponent, SidenavComponent, ToolbarComponent, AppComponent, NotFoundPageComponent]
})
export class CoreModule { }
