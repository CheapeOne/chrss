import { ApiCallback, ApiContext, ApiEvent } from "../api/api.interfaces";
import Response from "../api/Response";
import { connect } from "../db";
import Post from "./Post";

export function getAll(
  event: ApiEvent,
  context: ApiContext,
  callback: ApiCallback
) {
  connect();
  const posts = Post.query();
  return Response.ok("hello", callback);
}
