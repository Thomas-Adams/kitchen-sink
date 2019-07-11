import {MenuItem} from '../../models/interfaces/navigation/menu-item';


export function flattenTree(menuItem: MenuItem): Map<any, MenuItem> {
    const temp: Map<any, MenuItem> = new Map();
    temp.set(menuItem.id, menuItem);
    menuItem.children.forEach(c => {
            flattenTree(c).forEach((key, value) => temp.set(key, value));
        }
    );
    return temp;
}
