import { ApiCallback, ApiContext, ApiEvent } from './api/api.interfaces'; 
import Response from './api/Response';

export function test(event: ApiEvent, context: ApiContext, callback: ApiCallback) {
    return Response.ok('hello', callback);
}