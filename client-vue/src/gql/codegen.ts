export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** columns and relationships of "feed" */
export type Feed = {
   __typename?: 'feed';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  rss_url: Scalars['String'];
  self_url: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "feed". All fields are combined with a logical 'AND'. */
export type Feed_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Feed_Bool_Exp>>>;
  _not?: Maybe<Feed_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Feed_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  rss_url?: Maybe<String_Comparison_Exp>;
  self_url?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** ordering options when selecting data from "feed" */
export type Feed_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  rss_url?: Maybe<Order_By>;
  self_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "feed" */
export enum Feed_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  RssUrl = 'rss_url',
  /** column name */
  SelfUrl = 'self_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
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

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "post" */
export type Post = {
   __typename?: 'post';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  /** An object relationship */
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

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
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

/** ordering options when selecting data from "post" */
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

/** select columns of table "post" */
export enum Post_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  FeedId = 'feed_id',
  /** column name */
  Guid = 'guid',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** query root */
export type Query_Root = {
   __typename?: 'query_root';
  /** fetch data from the table: "feed" */
  feed: Array<Feed>;
  /** fetch data from the table: "feed" using primary key columns */
  feed_by_pk?: Maybe<Feed>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
};


/** query root */
export type Query_RootFeedArgs = {
  distinct_on?: Maybe<Array<Feed_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Order_By>>;
  where?: Maybe<Feed_Bool_Exp>;
};


/** query root */
export type Query_RootFeed_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPostArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};


/** query root */
export type Query_RootPost_By_PkArgs = {
  id: Scalars['Int'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
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

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root';
  /** fetch data from the table: "feed" */
  feed: Array<Feed>;
  /** fetch data from the table: "feed" using primary key columns */
  feed_by_pk?: Maybe<Feed>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
};


/** subscription root */
export type Subscription_RootFeedArgs = {
  distinct_on?: Maybe<Array<Feed_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Feed_Order_By>>;
  where?: Maybe<Feed_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFeed_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPostArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_By_PkArgs = {
  id: Scalars['Int'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
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
