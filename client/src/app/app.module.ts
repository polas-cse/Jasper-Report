import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ToastrModule } from 'ngx-toastr';
import { MaterialCustomModule } from './material-custom/material-custom.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PdfViewerComponent } from './jasper-report/shared/dialog/pdfViewer.component';
import { PdfViewerByUrlComponent } from './jasper-report/shared/dialog/pdf-viewer-by-url.component';
import { AppReportComponent } from './jasper-report/app-report.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
    PdfViewerByUrlComponent,
    AppReportComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialCustomModule,

    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    NgxSpinnerModule,
    FormsModule

  ],
  exports: [PdfViewerComponent, PdfViewerByUrlComponent],
  entryComponents: [PdfViewerComponent, PdfViewerByUrlComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
