import { Header } from '../model/header/base-request';
import { PdfDownloadRequestBody } from './pdf-download-request-body';

export class PdfDownloadRequest {
  header: Header = new Header();
  body: PdfDownloadRequestBody = new PdfDownloadRequestBody();
}
