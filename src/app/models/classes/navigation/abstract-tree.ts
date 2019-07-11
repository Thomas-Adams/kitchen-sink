import {AbstractNode} from './abstract-node';


// tslint:disable:variable-name
export class AbstractTree<T> {

    private _rootNode: AbstractNode<T>;
    private _idMap: Map<T, AbstractNode<T>>;
    private _objMap: Map<AbstractNode<T>, AbstractNode<T>>;
    private _selectedNode: AbstractNode<T>;

    constructor() {
        this._idMap = new Map();
        this._objMap = new Map();
    }


    get idMap(): Map<T, AbstractNode<T>> {
        return this._idMap;
    }

    get objMap(): Map<AbstractNode<T>, AbstractNode<T>> {
        return this._objMap;
    }

    get selectedNode(): AbstractNode<T> {
        return this._selectedNode;
    }

    set selectedNode(value: AbstractNode<T>) {
        this._selectedNode = value;
    }

    addNode(node: AbstractNode<T>, parent?: AbstractNode<T>): AbstractNode<T> {
        if (parent) {
            const p = this._objMap.get(parent);
            p.addChildNode(node);
            this._idMap.set(node.id, node);
            this._objMap.set(node, node);
        } else {
            this._rootNode = node;
            this._idMap.set(node.id, node);
            this._objMap.set(node, node);
        }
        return node;
    }

    removeNode(node: AbstractNode<T>): void {
        if (node.parent) {
            this._idMap.delete(node.id);
            this._objMap.delete(node);
            node._children.forEach(
                c => {
                    this.removeNode(c);
                }
            );
            const p = node.parent;
            p.removeChildNode(node);
            if (!this._objMap.has(this._selectedNode)) {
                this._selectedNode = null;
            }
        } else {
            this._idMap.clear();
            this._objMap.clear();
            this._rootNode = null;
            this._selectedNode = null;
        }
    }

    getNodeById(id: T): AbstractNode<T> {
        if (this._idMap.has(id)) {
            return this._idMap.get(id);
        } else {
            return null;
        }
    }

    getNodesByAttributeValue(attrName: string, attrValue: any): Array<AbstractNode<T>> {
        const temp = [];
        for (const [k, v] of this._objMap) {
            // tslint:disable-next-line:triple-equals
            if (k.attributes[attrName] == attrValue) {
                temp.push(k);
            }
        }
        return temp;
    }


    get rootNode(): AbstractNode<T> {
        return this._rootNode;
    }

    set rootNode(value: AbstractNode<T>) {
        this._rootNode = value;
        this._objMap.set(value, value);
        this._idMap.set(value.id, value);
    }


}
