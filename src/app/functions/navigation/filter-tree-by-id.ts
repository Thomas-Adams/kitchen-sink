import {MenuItem} from '../../models/interfaces/navigation/menu-item';

export function filterTree(menuItem: MenuItem, id: any): Array<MenuItem> {
    const temp = [];
    // tslint:disable-next-line:triple-equals
    if (menuItem.id == id) {
        temp.push(menuItem);
    }
    menuItem.children.forEach(c => {
            temp.push(...filterTree(c, id));
        }
    );
    return temp;
}
