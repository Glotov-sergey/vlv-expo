export interface ICategoryData {
  categories: ICategoryItem[];
}

interface ICategoryItem {
  id: number;
  parent_id: number;
  position: number;
  title: string;
}
