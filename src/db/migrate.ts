import { ApiCallback, ApiContext, ApiEvent } from "../api/api.interfaces";
import Response from "../api/Response";
import { connect } from "../db";

export async function latest(
  event: ApiEvent,
  context: ApiContext,
  callback: ApiCallback
) {
  const knex = connect();
  await knex.migrate.latest();
  return Response.ok("hello", callback);
}
