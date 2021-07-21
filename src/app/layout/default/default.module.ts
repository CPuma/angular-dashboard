import { DashboardService } from './../../modules/dashboard.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { PostsComponent } from './../../modules/posts/posts.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [ DefaultComponent, DashboardComponent, PostsComponent ],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule,

		FlexLayoutModule,

		
		MatSidenavModule,
		MatDividerModule,
		MatCardModule,
		MatTableModule,
		MatPaginatorModule
	],
	providers: [ DashboardService ]
})
export class DefaultModule {}
