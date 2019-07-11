// tslint:disable:variable-name
export class Node<T> {
    id: T;
    attributes: Map<string, object>;
    private _parent: Node<T> | null;
    level: number;
    private _children: Array<Node<T>> = [];

    constructor(options: { id: T, parent?: Node<T>, attributes?: { [key: string]: object } }) {
        this.attributes = new Map();
        this.id = options.id;
        if (options.parent) {
            this._parent = options.parent;
        } else {
            this._parent = null;
        }
        if (options.attributes) {
            Object.keys(options.attributes).forEach(key => {
                this.attributes.set(key, options.attributes[key]);
            });
        }
    }


    get parent(): Node<T> | null {
        return this._parent;
    }

    set parent(value: Node<T> | null) {
        this._parent = value;
    }

    addNode(node: Node<T>): Node<T> {
        this._children.push(node);
        node.parent = this;
        return this;
    }

    get children(): Array<Node<T>> {
        return this._children;
    }

    set children(value: Array<Node<T>>) {
        this._children = value;
    }

    isRoot(): boolean {
        return this.parent === null;
    }

    isLeaf(): boolean {
        return this.children.length === 0;
    }

    hasChildren(): boolean {
        return this.children.length > 0;
    }

    getDescendants(): Array<Node<T>> {
        const temp = [];
        temp.push(...this.children);
        this.children.forEach(c => temp.push(...c.children));
        return temp;
    }

    getAncestors(): Array<Node<T>> {
        const temp = [];
        temp.push(this.parent);
        temp.push(...this.parent.getAncestors());
        return temp;
    }

    getSiblings(): Array<Node<T>> {
        return this.parent.children;
    }
}
