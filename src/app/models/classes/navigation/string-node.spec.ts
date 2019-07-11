import {StringNode} from './string-node';


fdescribe('StringNode', () => {
    const root = new StringNode({id: 'root'});
    const child1 = new StringNode({id: 'child1', parent: root, attributes: {name: 'Child One'}});
    root.addChildNode(child1);

    fit('isRoot should return true for root', () => {
        expect(root.isRoot()).toBe(true);
    });
    fit('isRoot should return false child', () => {
        expect(child1.isRoot()).toBe(false);
    });
    fit('isLeaf should return true', () => {
        expect(child1.isLeaf()).toBe(true);
    });
    fit('isLeaf should return false for root', () => {
        expect(root.isLeaf()).toBe(false);
    });

    fit('Updated child1 should be in the tree', () => {
        child1.attributes.name = 'Child 1';
        expect(root.children[0].attributes.name).toBe('Child 1');
    });

});
