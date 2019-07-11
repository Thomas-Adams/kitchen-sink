import {MenuItem} from '../../models/interfaces/navigation/menu-item';
import {filterTreeById} from './filter-tree-by-id';


export function getPathOfNode(menu: MenuItem, menuItem: MenuItem): Array<MenuItem> {
    const temp = [];
    temp.push(menuItem);

    filterTreeById(menu, menuItem.parentId).forEach(e => {
        temp.push(... getPathOfNode(menu, e));
    });
    return temp;
}
