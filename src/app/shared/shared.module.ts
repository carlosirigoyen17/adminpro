import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [ ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [],
})
export class SharedModule { }
