import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'ast-pdf-viewer',
  templateUrl: './pdfViewer.component.html',
})
export class PdfViewerComponent implements OnInit {
  public pdf: any;
  public title: string = '';
  pdfBlob: any;
  wordBlob: any;
  excelBlob: any;
  fileName: string;
  closeEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private _spinner: NgxSpinnerService,
    public dialogRef: MatDialogRef<PdfViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    debugger;
    const binaryData = [];
    binaryData.push(data);
    const reportData = new Blob(binaryData);
    this.pdfBlob = reportData;
    this.wordBlob = reportData;
    this.excelBlob = reportData;
    const blob = new Blob([reportData], {
      type: 'application/pdf;charset=utf-8',
    });
    const file = new Blob([reportData], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    this.pdf = fileURL;
  }

  setFilename(filename: string) {
    debugger;
    this.fileName = filename;
  }

  setWordBlob(docData: any) {
    const binaryData = [];
    binaryData.push(docData);
    const reportData = new Blob(binaryData);
    this.wordBlob = reportData;
  }

  setExcelBlob(excellData: any) {
    const binaryData = [];
    binaryData.push(excellData);
    const reportData = new Blob(binaryData);
    this.excelBlob = reportData;
  }

  downloadPdf() {
    this.download(this.fileName + '.pdf', 'application/pdf', this.pdfBlob);
  }

  downloadDoc() {
    this.download(
      this.fileName + '.docx',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      this.wordBlob
    );
  }

  downloadExcel() {
    this.download(
      this.fileName + '.xls',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      this.excelBlob
    );
  }

  download(fileName: string, fileType: string, blob: any) {
    const anchor = document.createElement('a');

    anchor.download = fileName;
    anchor.href = window.URL.createObjectURL(blob);
    anchor.dataset.downloadurl = [fileType, anchor.download, anchor.href].join(
      ':'
    );

    const ev = document.createEvent('MouseEvents');
    ev.initMouseEvent(
      'click',
      true,
      false,
      self,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );

    anchor.dispatchEvent(ev);
  }

  printPdf() {
    const blob = new Blob([this.pdfBlob], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = blobUrl;
    document.body.appendChild(iframe);
    iframe.contentWindow.print();
  }

  hideModal() {
    this.closeEventEmitter.emit(true);
  }

  ngOnInit() { }
}
