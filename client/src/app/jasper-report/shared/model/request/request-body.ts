import { RequestHeader } from '../header/request-header';
import { EmptyRequestBody } from './empty-request-body';
import { PageSettings } from './page-settings';

export class RequestBody<T extends EmptyRequestBody> {
  header: RequestHeader;
  meta: Object;
  body: T;
  pageSettings: PageSettings;
}
