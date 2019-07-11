import {Component, Inject} from '@angular/core';
import {Menu} from '../../../models/interfaces/navigation/menu';
import menuData from '../../../../assets/data/menu-01/countries.json';
import {MenuItem} from '../../../models/interfaces/navigation/menu-item';
import {DOCUMENT} from '@angular/common';
import {filterTreeById} from '../../../functions/navigation/filter-tree-by-id';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    menu: Menu;
    active: MenuItem | Menu;
    breadcrumbs: Array<MenuItem> = [];

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.menu = menuData as Menu;
        this.active = menuData as MenuItem;
        this.breadcrumbs.push(this.active);
    }


    getDataSubMenu(menuItem: MenuItem): string {
        return 'submmenu-' + menuItem.id;
    }


    onMenuItemClick(event: Event, menuItem: MenuItem): void {
        if (event) {
            event.preventDefault();
        }
        console.log(this.active.name);
        this.shiftLeft(this.active);
        this.active = menuItem;
        console.log(this.active.name);
        this.activate(this.active);
        this.makeBreadCrumbs(menuItem);
    }

    onClickBreadCrumb(event: Event, breadcrumb: MenuItem): void {
        if (event && breadcrumb !== null) {
            event.preventDefault();
            if (this.active.name === breadcrumb.name) {
                return;
            }
            // move active.level - breadcumb.level back (right)
            let i = this.active.level - breadcrumb.level;
            while (i > 0) {
                this.shiftRight(this.active);
                this.active = filterTreeById(this.menu, this.active.parentId)[0];
                this.activate(this.active);
                i--;
            }
            this.makeBreadCrumbs(this.active);
        }
    }


    shiftRight(menuItem: MenuItem) {
        document.getElementById(menuItem.name).classList.remove('left');
        document.getElementById(menuItem.name).classList.remove('active');
        document.getElementById(menuItem.name).classList.add('right');
    }

    shiftLeft(menuItem: MenuItem) {
        document.getElementById(menuItem.name).classList.remove('right');
        document.getElementById(menuItem.name).classList.remove('active');
        document.getElementById(menuItem.name).classList.add('left');
    }

    activate(menuItem: MenuItem) {
        document.getElementById(menuItem.name).classList.remove('left');
        document.getElementById(menuItem.name).classList.remove('right');
        document.getElementById(menuItem.name).classList.add('active');
    }

    makeBreadCrumbs(m: MenuItem): void {
        if (m.level > 0) {
            let v = m;
            this.breadcrumbs = [m];
            for (let level = m.level - 1; level >= 0; level--) {
                v = filterTreeById(this.menu as MenuItem, v.parentId)[0];
                this.breadcrumbs.unshift(v);
            }

        } else {
            this.breadcrumbs = [m];
        }
    }

}
