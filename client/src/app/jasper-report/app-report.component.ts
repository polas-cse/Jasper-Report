import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmptyBodyRequest } from './shared/model/request/empty-body-request';
import { LoaderService } from './shared/services/loader.service';
import { ReportMakerService } from './shared/services/report-maker.service';

@Component({
  selector: 'app-app-report',
  templateUrl: './app-report.component.html',
  styleUrls: ['./app-report.component.scss'],
})
export class AppReportComponent implements OnInit {

  public form: FormGroup;
  language: string;
  url: string;
  applicationTrackingId: string;
  downloadedFileName: string;
  requestBody: EmptyBodyRequest = new EmptyBodyRequest();

  constructor(
    private _loaderService: LoaderService,
    private _reportMakerService: ReportMakerService

  ) { }

  ngOnInit(): void { }

  getDownloadPdfReport() {
    this.getDownloadPdf(this.requestBody, this.url, this.downloadedFileName);
  }

  getDownloadPdf(requestBody: any, url: string, downloadedFileName: string) {
    alert('Request Body Value :' + JSON.stringify(requestBody));
    this._loaderService.display(true);
    this._reportMakerService
      .getJasperReport(requestBody, url, downloadedFileName)
      .subscribe(
        (res: any) => this._loaderService.display(false),
        (error: any) => this._loaderService.display(false)
      );
  }




}
