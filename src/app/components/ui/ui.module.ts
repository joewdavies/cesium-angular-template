import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MaterialModule } from 'src/app/material.module';
import { MatBadgeIconDirective } from './badge-icon/mat-badge-icon.directive';
import { HeaderComponent } from './header/header.component';
import { SideMultipanelComponent } from './side-multipanel/side-multipanel.component';
import { TabPanelComponent } from './side-multipanel/tab-panel.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
const components = [HeaderComponent, TabPanelComponent, SideMultipanelComponent, SplashScreenComponent];

@NgModule({
    declarations: [...components, MatBadgeIconDirective],
    imports: [
        CommonModule,
        MaterialModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
    ],
    exports: [...components],
})
export class UiModule {}
