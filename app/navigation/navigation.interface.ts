export type RootStackParams = {
  Home: undefined;
  Catalog: CatalogStackParams;
  Profile: undefined;
  Favourite: undefined;
  Cart: undefined;
  Product: {
    id: string;
  };
};

export type CatalogStackParams = {
  CatalogSearch: undefined;
  CatalogProducts: {
    collection_id: number;
  };
  CatalogProduct: {
    insales_id: number;
  };
};

export type ProfileStackParams = {
  profileMain: undefined;
  profileLogin: undefined;
  profileRegister: undefined;
  profileShops: undefined;
  profileRecomendations: undefined;
  profileDelivery: undefined;
  profileReturn: undefined;
  profileAbout: undefined;
};
