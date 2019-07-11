import {MenuItem} from '../../models/interfaces/navigation/menu-item';

export function filterTreeByAttribute(menuItem: MenuItem, value: any, attribute: string): Array<MenuItem> {
    const temp = [];
    // tslint:disable-next-line:triple-equals
    if (menuItem[attribute] == value) {
        temp.push(menuItem);
    }
    menuItem.children.forEach(c => {
            temp.push(...filterTreeByAttribute(c, value, attribute));
        }
    );
    return temp;
}
