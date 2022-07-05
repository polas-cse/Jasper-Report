import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { forkJoin, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/app/jasper-report/shared/environments/environment';
import { PdfViewerByUrlComponent } from '../dialog/pdf-viewer-by-url.component';
import { PdfViewerComponent } from '../dialog/pdfViewer.component';
import { PdfDownloadRequest } from '../pdf-request/pdf-download-request';
import { RequestBodyBuilder } from '../request-body-builder';

@Injectable({
  providedIn: 'root',
})
export class ReportMakerService {
  constructor(
    private reqBodyBuilder: RequestBodyBuilder,
    private httpClient: HttpClient,
    private dialog: MatDialog
  ) { }

  // TODO: make a util class for this particular function
  // public getReports<T>(url: string, rb: RequestBody<T>): Observable<any[]> {
  //   const urls: string[] = [url + 'PDF', url + 'DOC', url + 'XLS'];
  //   const rbs: object[] = [rb, rb, rb];
  //   const res = new Array(urls.length);
  //   urls.forEach((value, index) => {
  //     res[index] = this.httpClient.post(urls[index], rbs[index], { responseType: 'blob' });
  //   });
  //   return forkJoin(res);
  // }

  public getReports<T>(url: string, rb: any): Observable<any[]> {
    // const urls: string[] = [url + 'PDF', url + 'DOC', url + 'XLS'];
    const urls: string[] = [url, url, url];
    const rbs: object[] = [rb, rb, rb];
    const res = new Array(urls.length);
    urls.forEach((value, index) => {
      res[index] = this.httpClient.post(urls[index], rbs[index], {
        responseType: 'blob',
      });
    });
    return forkJoin(res);
  }


  // TODO: throw it into a separate class, preferably a util class
  public downloadAllFormat(
    pdfBlob: any,
    docBlob: any,
    excelBlob: any,
    fileName: string
  ) {
    debugger;
    let pdfArrayBuffer;
    const pdfFileReader = new FileReader();
    pdfFileReader.onload = (evPdf) => {
      pdfArrayBuffer = evPdf.target['result'];
      const pdfData = pdfArrayBuffer;

      let wordArrayBuffer;
      const wordFileReader = new FileReader();
      wordFileReader.onload = (evWord) => {
        wordArrayBuffer = evWord.target['result'];
        const wordData = wordArrayBuffer;

        let excelArrayBuffer;
        const excelFileReader = new FileReader();
        excelFileReader.onload = (evExcel) => {
          excelArrayBuffer = evExcel.target['result'];
          const excelData = excelArrayBuffer;
          this.viewAllFormat(pdfData, wordData, excelData, fileName);
        };
        excelFileReader.readAsArrayBuffer(excelBlob);
      };
      wordFileReader.readAsArrayBuffer(docBlob);
    };
    pdfFileReader.readAsArrayBuffer(pdfBlob);
  }

  viewAllFormat(pdfData: any, docData: any, excelData: any, filename: string) {
    // debugger;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '900px';
    dialogConfig.position = { top: '60px' };
    dialogConfig.closeOnNavigation = true;
    let dialogRef;
    dialogConfig.data = pdfData;
    dialogRef = this.dialog.open(PdfViewerComponent, dialogConfig);
    dialogRef.componentInstance.setFilename(filename);
    dialogRef.componentInstance.setWordBlob(docData);
    dialogRef.componentInstance.setExcelBlob(excelData);
    this.closeEventEmitterSubscriber(dialogRef);
  }

  viewPdfFormat(pdfData: any, docData: any, excelData: any, filename: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '900px';
    dialogConfig.position = { top: '60px' };
    dialogConfig.closeOnNavigation = true;
    let dialogRef;
    dialogConfig.data = pdfData;
    dialogRef = this.dialog.open(PdfViewerByUrlComponent, dialogConfig);
    dialogRef.componentInstance.setFilename(filename);
    dialogRef.componentInstance.setWordBlob(docData);
    dialogRef.componentInstance.setExcelBlob(excelData);
    this.closeEventEmitterSubscriber(dialogRef);
  }

  closeEventEmitterSubscriber(dialogRef: MatDialogRef<any, any>) {
    dialogRef.componentInstance.closeEventEmitter.subscribe(
      (res: any) => dialogRef.close(),
      (error: any) => console.log(error)
    );
  }

  studentListReport(request: any): Observable<boolean> {
    //debugger;
    return this.getReports(`${environment.baseURL}${environment.STUDENT_LIST_REPORT}`, request).pipe(
      tap(reportData => {
        this.downloadAllFormat(reportData[0], reportData[1], reportData[2], 'student_list_report' + request.body);
      }),
      map(reportData => reportData != null)
    );
  }

  markSheetReport(request: any): Observable<boolean> {
    //debugger;
    return this.getReports(`${environment.baseURL}${environment.MARK_SHEET_REPORT}`, request).pipe(
      tap(reportData => {
        this.downloadAllFormat(reportData[0], reportData[1], reportData[2], 'mark_sheet_report' + request.body);
      }),
      map(reportData => reportData != null)
    );
  }


  getJasperReport(
    requestBody: PdfDownloadRequest,
    url: string,
    downloadedFileName: string
  ): Observable<boolean> {
    console.log(JSON.stringify(requestBody));
    return this.getReports(url, requestBody).pipe(
      tap((reportData) => {
        this.downloadAllFormat(
          reportData[0],
          reportData[1],
          reportData[2],
          downloadedFileName
        );
      }),
      map((reportData) => reportData != null)
    );
  }
}
