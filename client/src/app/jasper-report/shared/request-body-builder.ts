import { Injectable } from '@angular/core';
import { RequestHeader } from './model/header/request-header';
import { PageSettings } from './model/request/page-settings';
import { RequestBody } from './model/request/request-body';

@Injectable({ providedIn: 'root' })
export class RequestBodyBuilder {
  buildRequestBody<T>(url: string, body: T): RequestBody<T> {
    const rb = {} as RequestBody<T>;
    rb.header = new RequestHeader();
    rb.meta = {} as Object;
    rb.body = body;
    return rb;
  }

  buildRequestBodyWithPagination<T>(
    url: string,
    body: T,
    pageSettings: PageSettings
  ): RequestBody<T> {
    const rb = {} as RequestBody<T>;
    rb.header = new RequestHeader();
    rb.meta = {} as Object;
    rb.body = body;
    rb.pageSettings = pageSettings;
    return rb;
  }
}
