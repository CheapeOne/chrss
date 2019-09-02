import { ApiCallback, ApiResponse } from "./api.interfaces";
import { httpStatusCodes } from "./httpStatusCodes";

/**
 * Contains helper methods to generate a HTTP response.
 */
export default class Response {
  public static ok<T>(result: T, callback: ApiCallback): void {
    Response.build<T>(result, httpStatusCodes.OK, callback);
  }

  private static build<T>(
    result: T,
    statusCode: number,
    callback: ApiCallback
  ): void {
    const response: ApiResponse = {
      body: JSON.stringify(result),
      headers: {
        "Access-Control-Allow-Origin": "*" // This is required to make CORS work with AWS API Gateway Proxy Integration.
      },
      statusCode
    };

    callback(undefined, response);
  }
}
