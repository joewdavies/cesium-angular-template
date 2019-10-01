import { AlertService } from './alert.service';
import { OnInit, Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertConfig } from './alert-config.model';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.scss'],
})
export class AlertComponent {
  public message: any;
  constructor(public dialogRef: MatDialogRef<AlertComponent>, @Inject(MAT_DIALOG_DATA) public data: AlertConfig) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
