type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type ModelUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type ModelPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type ModelPostWithAuthor = Omit<ModelPost, 'userId'> & {
  author: string;
};
