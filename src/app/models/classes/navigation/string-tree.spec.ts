import {StringNode} from './string-node';
import {StringTree} from './string-tree';
import treeData from '../../../../assets/data/menu-02/countries.json';
import {NodeData} from '../../interfaces/navigation/node-data';

fdescribe('StringTree', () => {
    const root = new StringNode({id: 'root'});
    const child1 = new StringNode({id: 'child1', parent: root, attributes: {name: 'Child I'}});
    const child2 = new StringNode({id: 'child1', parent: root, attributes: {name: 'Child II'}});
    const child3 = new StringNode({id: 'child1', parent: root, attributes: {name: 'Child III'}});
    const child11 = new StringNode({id: 'child11', parent: child1, attributes: {name: 'Child I-I'}});
    const child12 = new StringNode({id: 'child12', parent: child1, attributes: {name: 'Child I-II'}});
    const child13 = new StringNode({id: 'child13', parent: child1, attributes: {name: 'Child I-III'}});
    const child121 = new StringNode({id: 'child121', parent: child12, attributes: {name: 'Child I-II-I'}});
    const child122 = new StringNode({id: 'child122', parent: child12, attributes: {name: 'Child I-II-II'}});
    const tree = new StringTree();
    const impTree = StringTree.createTreeFromJson(treeData as NodeData<string>);
    tree.addNode(root);
    tree.addNode(child1, root);
    tree.addNode(child2, root);
    tree.addNode(child3, root);
    tree.addNode(child11, child1);
    tree.addNode(child12, child1);
    tree.addNode(child13, child1);
    tree.addNode(child121, child12);
    tree.addNode(child122, child12);

    console.log(JSON.stringify(child12.attributes));

    fit('isRoot should return true for the rootNode', () => {
        expect(root.isRoot()).toBe(true);
    });

    fit('isLeaf should return true for thr child node child3', () => {
        expect(child3.isLeaf()).toBe(true);
    });

    fit('child12 should have the right name attribute', () => {
        const name = 'name';
        expect(tree.getNodeById('child12').attributes[name]).not.toBe(null);
        expect(tree.getNodeById('child12').attributes[name]).toBe('Child I-II');
    });

    fit('child12 should be retrieved by id', () => {
        expect(tree.getNodeById('child12')).not.toBe(null);
    });

    fit('retrieved child12 should have the right number of children', () => {
        expect(tree.getNodeById('child12').children.length).toBe(2);
    });

    fit('visited node child12 should have the right number of children', () => {
        const children1 = root.children;
        const temp = [];
        children1.forEach(c => {
                if (c.id === 'child1') {
                    c.children.forEach(c1 => {
                        if (c1.id === 'child12') {
                            temp.push(c1);
                        }
                    });
                }
            }
        );
        const chid12 = temp[0];
        expect(chid12).not.toBe(null);
        expect(chid12.children.length).toBe(2);
    });

    fit('retrieved children of child12 should be identical', () => {
        const children = tree.getNodeById('child12').children;
        expect(children[0] === child121).toBe(true);
        expect(children[1] === child122).toBe(true);
    });

    fit('visited children of child12 should be identical', () => {
        const children1 = root.children;
        const temp = [];
        children1.forEach(c => {
                if (c.id === 'child1') {
                    c.children.forEach(c1 => {
                        if (c1.id === 'child12') {
                            temp.push(c1);
                        }
                    });
                }
            }
        );
        const chid12 = temp[0];
        expect(child12.children[0] === child121).toBe(true);
        expect(child12.children[1] === child122).toBe(true);
    });

    fit('get nodes by attribute value of "Child I-I" should give the right node', () => {
        const result = tree.getNodesByAttributeValue('name', 'Child I-I');
        expect(result.length).toBe(1);
    });

    fit('removed node child1 should not leave orphans behind', () => {
        tree.removeNode(child1);
        expect(root.children.length).toBe(2);
    });

    fit('import of json tree data works without errors', () => {
        expect(impTree).not.toBe(null);
    });

    fit('Child node "Japan"  should have 4 children', () => {
        const name = 'name';
        const level = 'level';
        const japan = impTree.getNodeById('7');
        expect(japan).not.toBe(null);
        expect(japan.attributes[name]).toBe('japan');
        expect(japan.attributes[level]).toBe(2);
        expect(japan.children.length).toBe(4);
    });

    fit('Child node "Osaka"  should be a leaf', () => {
        const osaka = impTree.getNodeById('12');
        expect(osaka).not.toBe(null);
        expect(osaka.isLeaf()).toBe(true);
        expect(osaka.parent.id).toBe('7');
    });

});
