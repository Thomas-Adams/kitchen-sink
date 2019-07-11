export interface MenuItem {
  id: string;
  title?: string;
  name?: string;
  sort?: any;
  link?: string;
  level?: number;
  attributes?: { [key: string]: any };
  children?: Array<MenuItem>;
  parentId?: string | null;
  parentName?: string | null;
}
