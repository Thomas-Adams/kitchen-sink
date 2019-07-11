import menuData from '../../../assets/data/menu-01/countries.json';
import {MenuItem} from '../../models/interfaces/navigation/menu-item';
import {filterTree} from './filter-tree';

fdescribe('MenuItemComponent', () => {
    const menu = menuData as MenuItem;
    fit('should work', () => {
        const result = filterTree(menu as MenuItem, 134);
        console.log(JSON.stringify(result));
        expect(result.length).toBe(1);
    });
});
