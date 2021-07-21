import { getTestBed } from '@angular/core/testing';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MAT_OPTGROUP } from '@angular/material/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	@Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
	constructor() {}

	ngOnInit(): void {}

	toggleSideBar() {
		console.log('HEADER CLICK EN TOGGLE_SIDEBAR');
		this.toggleSideBarForMe.emit();

		// Emitimos un evento ,  para que los demas Componentes , subscritos actualicen tu TAMAÑO
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 300);
	}
}
