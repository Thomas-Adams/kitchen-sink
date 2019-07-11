// tslint:disable:variable-name

export class AbstractNode<T> {
    id: T;
    attributes: { [key: string]: any } = {};
    _parent: AbstractNode<T> | null;
    _level: number;
    _children: Array<AbstractNode<T>> = [];

    constructor(options: { id: T, parent?: AbstractNode<T>, attributes?: { [key: string]: any } }) {
        this.id = options.id;
        if (options.parent) {
            this.parent = options.parent;
        } else {
            this._parent = null;
        }
        if (options.attributes) {
            for (const key in options.attributes) {
                if (key) {
                    this.attributes[key] = options.attributes[key];
                }
            }
        } else {
            this.attributes = {};
        }
    }

    get parent(): AbstractNode<T> | null {
        return this._parent;
    }

    set parent(value: AbstractNode<T> | null) {
        this._parent = value;
        this._level = this._parent.level + 1;
    }

    addChildNode(node: AbstractNode<T>): AbstractNode<T> {
        this._children.push(node);
        node.parent = this;
        return this;
    }

    removeChildNode(node: AbstractNode<T>): AbstractNode<T> {
        const index = this._children.indexOf(node, 0);
        this._children.splice(index, 1);
        return this;
    }


    get children(): Array<AbstractNode<T>> {
        return this._children;
    }


    get level(): number {
        return this._level;
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

    getDescendants(): Array<AbstractNode<T>> {
        const temp = [];
        temp.push(...this.children);
        this.children.forEach(c => temp.push(...c.children));
        return temp;
    }

    getAncestors(): Array<AbstractNode<T>> {
        const temp = [];
        temp.push(this.parent);
        temp.push(...this.parent.getAncestors());
        return temp;
    }

    getSiblings(): Array<AbstractNode<T>> {
        return this.parent.children;
    }

    filterSubTreeByAttribute(node: AbstractNode<T>, attrName: string, attrValue: any): Array<AbstractNode<T>> {
        const temp = [];
        if (node.attributes[attrName] === attrValue) {
            temp.push(node);
        }
        node.children.forEach(c => {
            temp.push(...this.filterSubTreeByAttribute(c, attrName, attrValue));
        });
        return temp;
    }


}
