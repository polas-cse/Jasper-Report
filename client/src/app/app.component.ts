import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Header } from './jasper-report/shared/model/header/base-request';
import { EmptyBody } from './jasper-report/shared/model/request/empty-body';
import { EmptyBodyRequest } from './jasper-report/shared/model/request/empty-body-request';
import { LoaderService } from './jasper-report/shared/services/loader.service';
import { ReportMakerService } from './jasper-report/shared/services/report-maker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public form: FormGroup;
  url: string;
  applicationTrackingId: string;
  downloadedFileName: string;
  rmptyBodyRequest: EmptyBodyRequest = new EmptyBodyRequest();
  header: Header = new Header();
  body: EmptyBody = new EmptyBody();




  constructor(
    private _loaderService: LoaderService,
    private _reportMakerService: ReportMakerService,
    private _spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {

  }


  studentListReport() {
    this.header.requestId = this.header.requestId;
    this.header.requestDateTime = this.header.requestDateTime;
    this.header.requestSource = this.header.requestSource;
    this.header.requestServiceSource = this.header.requestServiceSource;

    this.rmptyBodyRequest.header = this.header;
    this.rmptyBodyRequest.body = this.body;

    this._spinner.show()
    this._reportMakerService.studentListReport(this.rmptyBodyRequest)
      .subscribe(data => this._spinner.hide(),
        error => this._spinner.hide());
  }

  markSheetReport() {
    this.header.requestId = this.header.requestId;
    this.header.requestDateTime = this.header.requestDateTime;
    this.header.requestSource = this.header.requestSource;
    this.header.requestServiceSource = this.header.requestServiceSource;

    this.rmptyBodyRequest.header = this.header;
    this.rmptyBodyRequest.body = this.body;

    this._spinner.show()
    this._reportMakerService.markSheetReport(this.rmptyBodyRequest)
      .subscribe(data => this._spinner.hide(),
        error => this._spinner.hide());
  }

}
