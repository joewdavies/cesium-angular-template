import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  public transform(value: any, type: string) {
    if (type === 'base64') {
      return this.sanitized.bypassSecurityTrustResourceUrl(value);
    }
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
