import {MenuItem} from '../../models/interfaces/navigation/menu-item';
import menuData from '../../../assets/data/menu-01/countries.json';
import {flattenTree} from './flatten-tree';
import {filterTreeById} from './filter-tree-by-id';



fdescribe('flattenTree', () => {
    const menu = menuData as MenuItem;
    fit('Flatten tree by id 134 should get a 1 elements long result of nodes', () => {
        const menuItem = filterTreeById(menuData, 134);
        const result = flattenTree(menuItem[0]);
        expect(result.size).toBe(1);
    });
    fit('Flatten tree by id 8 should get a 5 elements long result of nodes', () => {
        const menuItem = filterTreeById(menuData, 8);
        const result = flattenTree(menuItem[0]);
        expect(result.size).toBe(5);
    });
});
