// codegen uses plural types which are dumb

import { Posts, Feeds } from '#/gql/codegen';

export interface Post extends Posts {}
export interface Feed extends Feeds {}
export interface Tag {}
