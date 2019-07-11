import {MenuItem} from '../../models/interfaces/navigation/menu-item';
import menuData from '../../../assets/data/menu-01/countries.json';
import {filterTreeByLevel} from './filter-tree-by-level';


fdescribe('MenuItemComponent', () => {
    const menu = menuData as MenuItem;
    fit('Filter by level 1 should get a 6 elements long result of nodes', () => {
        const result = filterTreeByLevel
        (menu as MenuItem, 1);
        expect(result.length).toBe(6);
    });
});
