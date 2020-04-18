import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
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

export type Feed = {
   __typename?: 'feed';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  feed_tags: Array<Feed_Tag>;
  id: Scalars['Int'];
  rss_url: Scalars['String'];
  self_url: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


export type FeedFeed_TagsArgs = {
  distinct_on?: Maybe<Array<Feed_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Tag_Order_By>>;
  where?: Maybe<Feed_Tag_Bool_Exp>;
};

export type Feed_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Feed_Bool_Exp>>>;
  _not?: Maybe<Feed_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Feed_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  feed_tags?: Maybe<Feed_Tag_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  rss_url?: Maybe<String_Comparison_Exp>;
  self_url?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export type Feed_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  rss_url?: Maybe<Order_By>;
  self_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Feed_Select_Column {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  RssUrl = 'rss_url',
  SelfUrl = 'self_url',
  Title = 'title',
  UpdatedAt = 'updated_at'
}

export type Feed_Tag = {
   __typename?: 'feed_tag';
  created_at: Scalars['timestamptz'];
  feed?: Maybe<Feed>;
  feed_id: Scalars['Int'];
  tag?: Maybe<Tag>;
  tag_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

export type Feed_Tag_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Feed_Tag_Bool_Exp>>>;
  _not?: Maybe<Feed_Tag_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Feed_Tag_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  feed?: Maybe<Feed_Bool_Exp>;
  feed_id?: Maybe<Int_Comparison_Exp>;
  tag?: Maybe<Tag_Bool_Exp>;
  tag_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export type Feed_Tag_Order_By = {
  created_at?: Maybe<Order_By>;
  feed?: Maybe<Feed_Order_By>;
  feed_id?: Maybe<Order_By>;
  tag?: Maybe<Tag_Order_By>;
  tag_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Feed_Tag_Select_Column {
  CreatedAt = 'created_at',
  FeedId = 'feed_id',
  TagId = 'tag_id',
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

export type Post = {
   __typename?: 'post';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  feed?: Maybe<Feed>;
  feed_id: Scalars['Int'];
  guid?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
};

export type Post_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Bool_Exp>>>;
  _not?: Maybe<Post_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  feed?: Maybe<Feed_Bool_Exp>;
  feed_id?: Maybe<Int_Comparison_Exp>;
  guid?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  published_at?: Maybe<Timestamptz_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

export type Post_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  feed?: Maybe<Feed_Order_By>;
  feed_id?: Maybe<Order_By>;
  guid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  published_at?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

export enum Post_Select_Column {
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
  feed: Array<Feed>;
  feed_by_pk?: Maybe<Feed>;
  feed_tag: Array<Feed_Tag>;
  feed_tag_by_pk?: Maybe<Feed_Tag>;
  post: Array<Post>;
  post_by_pk?: Maybe<Post>;
  tag: Array<Tag>;
  tag_by_pk?: Maybe<Tag>;
};


export type Query_RootFeedArgs = {
  distinct_on?: Maybe<Array<Feed_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Order_By>>;
  where?: Maybe<Feed_Bool_Exp>;
};


export type Query_RootFeed_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFeed_TagArgs = {
  distinct_on?: Maybe<Array<Feed_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Tag_Order_By>>;
  where?: Maybe<Feed_Tag_Bool_Exp>;
};


export type Query_RootFeed_Tag_By_PkArgs = {
  feed_id: Scalars['Int'];
  tag_id: Scalars['Int'];
};


export type Query_RootPostArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};


export type Query_RootPost_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};


export type Query_RootTag_By_PkArgs = {
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
  feed: Array<Feed>;
  feed_by_pk?: Maybe<Feed>;
  feed_tag: Array<Feed_Tag>;
  feed_tag_by_pk?: Maybe<Feed_Tag>;
  post: Array<Post>;
  post_by_pk?: Maybe<Post>;
  tag: Array<Tag>;
  tag_by_pk?: Maybe<Tag>;
};


export type Subscription_RootFeedArgs = {
  distinct_on?: Maybe<Array<Feed_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Order_By>>;
  where?: Maybe<Feed_Bool_Exp>;
};


export type Subscription_RootFeed_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFeed_TagArgs = {
  distinct_on?: Maybe<Array<Feed_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Tag_Order_By>>;
  where?: Maybe<Feed_Tag_Bool_Exp>;
};


export type Subscription_RootFeed_Tag_By_PkArgs = {
  feed_id: Scalars['Int'];
  tag_id: Scalars['Int'];
};


export type Subscription_RootPostArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};


export type Subscription_RootPost_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTagArgs = {
  distinct_on?: Maybe<Array<Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tag_Order_By>>;
  where?: Maybe<Tag_Bool_Exp>;
};


export type Subscription_RootTag_By_PkArgs = {
  id: Scalars['Int'];
};

export type Tag = {
   __typename?: 'tag';
  created_at: Scalars['timestamptz'];
  feed_tags: Array<Feed_Tag>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


export type TagFeed_TagsArgs = {
  distinct_on?: Maybe<Array<Feed_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Tag_Order_By>>;
  where?: Maybe<Feed_Tag_Bool_Exp>;
};

export type Tag_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tag_Bool_Exp>>>;
  _not?: Maybe<Tag_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tag_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  feed_tags?: Maybe<Feed_Tag_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export type Tag_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Tag_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}


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

export type TagsQueryVariables = {};


export type TagsQuery = (
  { __typename?: 'query_root' }
  & { tags: Array<(
    { __typename?: 'tag' }
    & TagFragment
  )> }
);

export type TagFragment = (
  { __typename?: 'tag' }
  & Pick<Tag, 'id' | 'name'>
);

export type FeedsQueryVariables = {};


export type FeedsQuery = (
  { __typename?: 'query_root' }
  & { feeds: Array<(
    { __typename?: 'feed' }
    & Pick<Feed, 'id' | 'self_url' | 'rss_url' | 'title' | 'created_at' | 'description'>
  )> }
);

export type PostsQueryVariables = {};


export type PostsQuery = (
  { __typename?: 'query_root' }
  & { post: Array<(
    { __typename?: 'post' }
    & Pick<Post, 'id' | 'title' | 'url' | 'description' | 'feed_id' | 'image' | 'published_at'>
  )> }
);

export const TagFragmentDoc = gql`
    fragment Tag on tag {
  id
  name
}
    `;
export const TagsDocument = gql`
    query Tags {
  tags: tag {
    ...Tag
  }
}
    ${TagFragmentDoc}`;
export type TagsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TagsQuery, TagsQueryVariables>, 'query'>;

    export const TagsComponent = (props: TagsComponentProps) => (
      <ApolloReactComponents.Query<TagsQuery, TagsQueryVariables> query={TagsDocument} {...props} />
    );
    

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        return ApolloReactHooks.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, baseOptions);
      }
export function useTagsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, baseOptions);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = ApolloReactCommon.QueryResult<TagsQuery, TagsQueryVariables>;
export const FeedsDocument = gql`
    query Feeds {
  feeds: feed {
    id
    self_url
    rss_url
    title
    created_at
    description
  }
}
    `;
export type FeedsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FeedsQuery, FeedsQueryVariables>, 'query'>;

    export const FeedsComponent = (props: FeedsComponentProps) => (
      <ApolloReactComponents.Query<FeedsQuery, FeedsQueryVariables> query={FeedsDocument} {...props} />
    );
    

/**
 * __useFeedsQuery__
 *
 * To run a query within a React component, call `useFeedsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeedsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FeedsQuery, FeedsQueryVariables>) {
        return ApolloReactHooks.useQuery<FeedsQuery, FeedsQueryVariables>(FeedsDocument, baseOptions);
      }
export function useFeedsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FeedsQuery, FeedsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FeedsQuery, FeedsQueryVariables>(FeedsDocument, baseOptions);
        }
export type FeedsQueryHookResult = ReturnType<typeof useFeedsQuery>;
export type FeedsLazyQueryHookResult = ReturnType<typeof useFeedsLazyQuery>;
export type FeedsQueryResult = ApolloReactCommon.QueryResult<FeedsQuery, FeedsQueryVariables>;
export const PostsDocument = gql`
    query Posts {
  post(order_by: {created_at: asc}, limit: 10) {
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
    

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        return ApolloReactHooks.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
      }
export function usePostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = ApolloReactCommon.QueryResult<PostsQuery, PostsQueryVariables>;