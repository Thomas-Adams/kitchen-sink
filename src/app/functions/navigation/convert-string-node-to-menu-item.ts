import {StringNode} from '../../models/classes/navigation/string-node';
import {MenuItem} from '../../models/interfaces/navigation/menu-item';


export function convertStringNodeToMenuItem(node: StringNode): MenuItem {
    const temp = [];
    const menuItem = createMenuItemProperties(node);
    node.children.forEach(c => {
        temp.push(convertStringNodeToMenuItem(c));
    });
    menuItem.children = temp;
    return menuItem;
}


export function createMenuItemProperties(node: StringNode): MenuItem {
    const menuItem: MenuItem = {
        id: node.id
    };
    const level = 'level';
    const name = 'name';
    const title = 'title';
    const link = 'link';
    const sort = 'sort';
    menuItem.parentName = '';
    menuItem.parentId = null;
    if (node.parent) {
        menuItem.parentId = node.parent.id;
        if (node.parent.attributes && node.parent.attributes[name]) {
            menuItem.parentName = node.parent.attributes[name];
        }
    }
    if (node.attributes) {
        if (node.attributes[level]) {
            menuItem.level = node.attributes[level];
        }
        if (node.attributes[title]) {
            menuItem.level = node.attributes[title];
        }
        if (node.attributes[link]) {
            menuItem.level = node.attributes[link];
        }
        if (node.attributes[sort]) {
            menuItem.level = node.attributes[sort];
        }
        if (node.attributes[name]) {
            menuItem.name = node.attributes[name];
        }
    }
    return menuItem;
}
