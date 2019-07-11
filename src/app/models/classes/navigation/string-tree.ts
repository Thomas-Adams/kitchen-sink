import {AbstractTree} from './abstract-tree';
import {NodeData} from '../../interfaces/navigation/node-data';
import {StringNode} from './string-node';

export class StringTree extends AbstractTree<string> {

    constructor() {
        super();
    }

    static createTreeFromJson(data: NodeData<string>): StringTree {
        const rootNode = new StringNode({
            id: data.id, parent: null,
            attributes: {name: data.name, level: data.level, ...data.attributes}
        });
        const tree = new StringTree();
        tree.rootNode = rootNode;
        data.children.forEach(c => {
            this.createChildNodes(c, tree.rootNode, tree);
        });
        return tree;
    }

    static createChildNodes(data: NodeData<string>, parent: StringNode, tree: StringTree) {
        const node = new StringNode({id: data.id, parent, attributes: {name: data.name, level: data.level, ...data.attributes}});
        tree.addNode(node, parent);
        data.children.forEach(c => {
            const child = new StringNode({id: c.id, parent, attributes: {name: c.name, level: c.level, ...c.attributes}});
            this.createChildNodes(c, node, tree);
        });
    }


}
