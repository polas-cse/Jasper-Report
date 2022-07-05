import { ResponseHeader } from './response-header';
import { ResponsePayload } from './response-payload';

export interface ResponseBody<T> {
  header: ResponseHeader;
  meta: Object;
  body: ResponsePayload<T>;
}
