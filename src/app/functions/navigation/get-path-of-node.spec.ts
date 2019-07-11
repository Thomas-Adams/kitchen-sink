import menuData from '../../../assets/data/menu-01/countries.json';
import {MenuItem} from '../../models/interfaces/navigation/menu-item';
import {filterTreeById} from './filter-tree-by-id';
import {getPathOfNode} from './get-path-of-node';


fdescribe('getPathOfNode', () => {
    const menu = menuData as MenuItem;
    fit('Get the node path of 134 node', () => {
        const menuItem = filterTreeById(menuData, 134);
        const result = getPathOfNode(menuData as MenuItem, menuItem[0]);
        expect(result.length).toBe(4);
    });
});
