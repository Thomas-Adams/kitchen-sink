import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../../../models/interfaces/navigation/menu-item';

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

    @Input()
    data: MenuItem;

    constructor() {
    }

    ngOnInit() {
    }


    getDataMenu() {
        return this.data.level === 1 ? 'main' : 'submenu-' + this.data.parentId;
    }


    getDataSubMenu() {

        return 'submenu-' + this.data.id;
    }


    getParentSubMenu() {
        return 'submenu-' + this.data.parentId;
    }

    getUlId() {
        return 'submenu-' + this.data.parentId;
    }
}
