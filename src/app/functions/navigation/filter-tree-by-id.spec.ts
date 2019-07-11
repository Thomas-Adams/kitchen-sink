import menuData from '../../../assets/data/menu-01/countries.json';
import {MenuItem} from '../../models/interfaces/navigation/menu-item';
import {filterTreeById} from './filter-tree-by-id';

fdescribe('MenuItemComponent', () => {
    const menu = menuData as MenuItem;
    fit('Filter by id "134" should get a 1 element long result', () => {
        const result = filterTreeById(menu as MenuItem, 134);
        expect(result.length).toBe(1);
    });
});
