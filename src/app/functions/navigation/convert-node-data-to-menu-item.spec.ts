import nodeData from '../../../assets/data/menu-02/countries.json';
import {convertNodeDataToMenuItem} from './convert-node-data-to-menu-item';

fdescribe('Convert "NodeData" to "MenuItem"', () => {
    fit('Converting to "MenuItem" should give the right id property', () => {
        const menuItem = convertNodeDataToMenuItem(nodeData);
        expect(menuItem.id).toBe('-1');
    });

    fit('Converting to "MenuItem" should give the right name property', () => {
        const menuItem = convertNodeDataToMenuItem(nodeData);
        expect(menuItem.name).toBe('ROOT');
    });

    fit('Converting to "MenuItem" should give the right number of children', () => {
        const menuItem = convertNodeDataToMenuItem(nodeData);
        expect(menuItem.children.length).toBe(6);
    });

    fit('Converting to "MenuItem" should give the child as Asia', () => {
        const menuItem = convertNodeDataToMenuItem(nodeData);
        expect(menuItem.children[0].name).toBe('asia');
    });
});
