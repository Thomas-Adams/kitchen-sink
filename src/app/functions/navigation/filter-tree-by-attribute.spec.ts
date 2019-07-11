import menuData from '../../../assets/data/menu-01/countries.json';
import {MenuItem} from '../../models/interfaces/navigation/menu-item';
import {filterTreeByLevel} from './filter-tree-by-level';
import {filterTreeByAttribute} from './filter-tree-by-attribute';


fdescribe('MenuItemComponent', () => {
    const menu = menuData as MenuItem;
    fit('Filter by name "Japan" should get a 1 element long result', () => {
        const result = filterTreeByAttribute(menu as MenuItem, 'japan', 'name');
        expect(result.length).toBe(1);
    });
});
