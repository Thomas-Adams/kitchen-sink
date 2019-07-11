export interface NodeData<T> {
    id: T;
    name: string;
    attributes?: { [key: string]: any };
    parentId: T | null;
    level: number;
    children: Array<NodeData<T>>;
}
