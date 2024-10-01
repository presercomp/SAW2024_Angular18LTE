import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { LayoutBaseComponent } from './layout-base/layout-base.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutSidebarComponent,
    LayoutNavbarComponent,
    LayoutBaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class LayoutModule { }
