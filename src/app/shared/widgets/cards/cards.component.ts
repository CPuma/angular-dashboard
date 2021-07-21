import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
	selector: 'app-widget-cards',
	templateUrl: './cards.component.html',
	styleUrls: [ './cards.component.scss' ]
})
export class CardsComponent implements OnInit {
	@Input() label: string;
	@Input() total: string;
  @Input() percentage: string;
  
	@Input() data: string;

	Highcharts = Highcharts;
	chartOptions = {};

	constructor() {}

	ngOnInit(): void {
		this.chartOptions = {
			chart: {
				type: 'area',
				backgroundColor: null,
				borderWidth: 0,
				margin: [ 2, 2, 2, 2 ],
				height: 60
			},
			title: {
				text: null
			},
			subtitle: {
				text: null
			},
			tooltip: {
				split: true,
				outside: true
			},
			legend: {
				enabled: false
			},
			credits: {
				enabled: false // Desabilita el cherry
			},
			exporting: {
				enabled: false
			},
			xAxis: {
				labels: {
					enabled: false
				},
				title: {
					text: null
				},
				startOnTick: false,
				endOnTick: false,
				tickOptions: []
			},
			yAxis: {
				labels: {
					enabled: false
				},
				title: {
					text: null
				},
				startOnTick: false,
				endOnTick: false,
				tickOptions: []
			},
			series: [
				{
					// name: 'Serie_NUMERO',
					name: this.label,
					data: this.data
				}
			]
		};

		// Opciones de Exportado
		HC_exporting(Highcharts);

	
	}
}
