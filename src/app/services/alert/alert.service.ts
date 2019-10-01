import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { AlertComponent } from './alert.component';
import { AlertConfig } from './alert-config.model';

@Injectable()
export class AlertService {
  private subject = new Subject<any>();

  constructor(private dialog: MatDialog) {}
  public confirm(config: AlertConfig) {
    this.openDialog(config);
  }

  public openDialog(config: AlertConfig) {
    this.dialog.open(AlertComponent, {
      height: config.height,
      width: config.width,
      data: {
        title: config.title,
        content: config.message,
        closeBtnLabel: config.closeBtnLabel,
      },
    });
  }
}
