// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { MaterialModule } from 'src/app/material.module';
import { AlertComponent } from './alert.component';

@NgModule({
  imports: [MaterialModule],
  declarations: [AlertComponent],
  exports: [AlertComponent],
})
export class AlertModule {}
