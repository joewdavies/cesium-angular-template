import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CesiumDirective } from './cesium.directive';
import { UiModule } from './components/ui/ui.module';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { AlertService } from './services/alert/alert.service';
import { SplashScreenService } from './services/splash-screen.service';
import { TemplateComponentModule } from './components/template-component/template-component.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [AppComponent, CesiumDirective],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgxSpinnerModule,
        HttpClientModule,
        HttpClientJsonpModule,
        UiModule,
        FormsModule,
        MatListModule,
        TemplateComponentModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-center'
        }) // ToastrModule added
    ],
    providers: [
        AlertService,
        SplashScreenService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
