import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CommonReportUtilService {
  locale: string;
  form: FormGroup;
  constructor(private translate: TranslateService) {}

  getRequestBody(applicationTrackingId: string, lang: string) {
    return {
      applicationTrackingId: applicationTrackingId,
      lang: lang,
    };
  }

  getLocale() {
    this.translate.onLangChange.subscribe((s: { lang: string }) => {
      if (s.lang === 'en') {
        this.locale = 'en-US';
      } else {
        this.locale = 'bn-BD';
      }
    });
  }
}
