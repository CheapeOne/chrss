import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

export type Feeds = {
   __typename?: 'feeds';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  rss_url: Scalars['String'];
  self_url: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Feeds_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Feeds_Bool_Exp>>>;
  _not?: Maybe<Feeds_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Feeds_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  rss_url?: Maybe<String_Comparison_Exp>;
  self_url?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export type Feeds_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  rss_url?: Maybe<Order_By>;
  self_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Feeds_Select_Column {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  RssUrl = 'rss_url',
  SelfUrl = 'self_url',
  Title = 'title',
  UpdatedAt = 'updated_at'
}

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Posts = {
   __typename?: 'posts';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  feed?: Maybe<Feeds>;
  feed_id: Scalars['Int'];
  guid?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
};

export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  _not?: Maybe<Posts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  feed?: Maybe<Feeds_Bool_Exp>;
  feed_id?: Maybe<Int_Comparison_Exp>;
  guid?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  published_at?: Maybe<Timestamptz_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

export type Posts_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  feed?: Maybe<Feeds_Order_By>;
  feed_id?: Maybe<Order_By>;
  guid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  published_at?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

export enum Posts_Select_Column {
  CreatedAt = 'created_at',
  Description = 'description',
  FeedId = 'feed_id',
  Guid = 'guid',
  Id = 'id',
  Image = 'image',
  PublishedAt = 'published_at',
  Title = 'title',
  UpdatedAt = 'updated_at',
  Url = 'url'
}

export type Query_Root = {
   __typename?: 'query_root';
  feeds: Array<Feeds>;
  feeds_by_pk?: Maybe<Feeds>;
  posts: Array<Posts>;
  posts_by_pk?: Maybe<Posts>;
};


export type Query_RootFeedsArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};


export type Query_RootFeeds_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
   __typename?: 'subscription_root';
  feeds: Array<Feeds>;
  feeds_by_pk?: Maybe<Feeds>;
  posts: Array<Posts>;
  posts_by_pk?: Maybe<Posts>;
};


export type Subscription_RootFeedsArgs = {
  distinct_on?: Maybe<Array<Feeds_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feeds_Order_By>>;
  where?: Maybe<Feeds_Bool_Exp>;
};


export type Subscription_RootFeeds_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type PostsQueryVariables = {};


export type PostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'url' | 'description' | 'feed_id' | 'image' | 'published_at'>
  )> }
);


export const PostsDocument = gql`
    query Posts {
  posts(order_by: {created_at: asc}, limit: 10) {
    id
    title
    url
    description
    feed_id
    image
    published_at
  }
}
    `;
export type PostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostsQuery, PostsQueryVariables>, 'query'>;

    export const PostsComponent = (props: PostsComponentProps) => (
      <ApolloReactComponents.Query<PostsQuery, PostsQueryVariables> query={PostsDocument} {...props} />
    );
    
export type PostsProps<TChildProps = {}> = ApolloReactHoc.DataProps<PostsQuery, PostsQueryVariables> & TChildProps;
export function withPosts<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PostsQuery,
  PostsQueryVariables,
  PostsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PostsQuery, PostsQueryVariables, PostsProps<TChildProps>>(PostsDocument, {
      alias: 'posts',
      ...operationOptions
    });
};
export type PostsQueryResult = ApolloReactCommon.QueryResult<PostsQuery, PostsQueryVariables>;