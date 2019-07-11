export interface MenuItem {
  id: any;
  title?: string;
  name?: string;
  sort?: any;
  link?: string;
  level?: number;
  children?: Array<MenuItem>;
  parentId?: string | null;
  parentName?: string | null;
}
