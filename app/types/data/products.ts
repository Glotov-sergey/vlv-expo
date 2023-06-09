export interface IProductsData {
  catalog: IProduct[];
  collection: ICollectionInfo;
  code: number;
}

export interface ICollectionInfo {
  description: string;
  id: number;
  insales_id: number;
  parent_id: number;
  title: string;
}

export interface IProductData {
  code: number;
  product: IProduct;
}

export interface IFilters {
  blogery?: string[];
  brend: string[];
  bukva?: string[];
  category_ids?: number[];
  collection_ids?: number[];
  color?: string[];
  diametr_tsentralnogo_kamnja?: string[];
  dizajner?: string[];
  elektronnyj_sertifikat?: string[];
  gravirovka?: string[];
  kategorija_dlja_reklamy?: string[];
}

export interface IProduct {
  available: string;
  brand: string;
  category_id: number;
  collection_ids: number[];
  colour: string;
  description: string;
  id: number;
  images: string[];
  insales_id: number;
  material: string;
  price: number;
  size: string;
  title: string;
  variants_id: number[];
}
