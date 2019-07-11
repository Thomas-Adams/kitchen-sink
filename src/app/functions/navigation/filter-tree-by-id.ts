import {MenuItem} from '../../models/interfaces/navigation/menu-item';
import {filterTreeByAttribute} from './filter-tree-by-attribute';

export function filterTreeById(menuItem: MenuItem, id: any): Array<MenuItem> {
    return filterTreeByAttribute(menuItem, id, 'id');
}



