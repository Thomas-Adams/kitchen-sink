import {MenuItem} from '../../models/interfaces/navigation/menu-item';
import {filterTreeByAttribute} from './filter-tree-by-attribute';


export function filterTreeByLevel(menuItem: MenuItem, level: any): Array<MenuItem> {
    return filterTreeByAttribute(menuItem, level, 'level');
}
