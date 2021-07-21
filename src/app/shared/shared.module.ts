import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AreaComponent } from './widgets/area/area.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardsComponent } from './widgets/cards/cards.component';
import { PieComponent } from './widgets/pie/pie.component';

@NgModule({
	declarations: [ HeaderComponent, FooterComponent, SidebarComponent, AreaComponent, CardsComponent, PieComponent ],
	imports: [
		CommonModule,
		RouterModule,

		MatDividerModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		MatListModule,

		FlexLayoutModule,
		HighchartsChartModule
	],
	exports: [ HeaderComponent, FooterComponent, SidebarComponent, AreaComponent, CardsComponent, PieComponent ]
})
export class SharedModule {}
