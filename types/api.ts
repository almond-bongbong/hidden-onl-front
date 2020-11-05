export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getInfluencers: Array<Influencer>;
  auth?: Maybe<CurrentAccount>;
  me?: Maybe<Account>;
  getPlaces: Array<Maybe<Place>>;
};

export type QueryGetPlacesArgs = {
  leftBottom: LatLngInput;
  rightTop: LatLngInput;
};

export type Influencer = {
  __typename?: 'Influencer';
  id: Scalars['ID'];
  platform: Platform;
  name: Scalars['String'];
  homepage?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<File>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export enum Platform {
  Youtube = 'YOUTUBE',
  Instagram = 'INSTAGRAM',
  Tv = 'TV',
}

export type File = {
  __typename?: 'File';
  url: Scalars['String'];
  originalName: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
};

export type CurrentAccount = {
  __typename?: 'CurrentAccount';
  id: Scalars['ID'];
  name: Scalars['String'];
  role: Role;
  iat: Scalars['Int'];
  exp: Scalars['Int'];
  iss: Scalars['String'];
};

export enum Role {
  User = 'USER',
  Manager = 'MANAGER',
  Admin = 'ADMIN',
}

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  role: Role;
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  platform: LoginPlatform;
  thumbnail?: Maybe<File>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
};

export enum LoginPlatform {
  Kakao = 'KAKAO',
}

export type LatLngInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Place = {
  __typename?: 'Place';
  id: Scalars['ID'];
  name: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  zipcode?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  influencer: Influencer;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  registerInfluencer: MutationResponse;
  updateInfluencer: MutationResponse;
  login?: Maybe<LoginReponse>;
  updateMe?: Maybe<MutationResponse>;
  registerPlace: MutationResponse;
};

export type MutationRegisterInfluencerArgs = {
  platform: Platform;
  name: Scalars['String'];
  homepage: Scalars['String'];
  thumbnail?: Maybe<FileInput>;
};

export type MutationUpdateInfluencerArgs = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<FileInput>;
};

export type MutationLoginArgs = {
  accessToken: Scalars['String'];
  platform: LoginPlatform;
};

export type MutationUpdateMeArgs = {
  thumbnail?: Maybe<FileInput>;
  name?: Maybe<Scalars['String']>;
};

export type MutationRegisterPlaceArgs = {
  name: Scalars['String'];
  location: LocationInput;
  influencerId: Scalars['String'];
  link: Scalars['String'];
};

export type FileInput = {
  url: Scalars['String'];
  originalName: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  ok: Scalars['Boolean'];
  message: Scalars['String'];
  code?: Maybe<Scalars['String']>;
};

export type LoginReponse = {
  __typename?: 'LoginReponse';
  ok: Scalars['Boolean'];
  message: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  zipcode?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
};

export enum ErrorName {
  Unauthenticated = 'UNAUTHENTICATED',
}
