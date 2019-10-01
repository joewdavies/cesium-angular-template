import { Component, ViewChild } from '@angular/core';
import { CesiumDirective } from './cesium.directive';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    @ViewChild(CesiumDirective) public cesium;
    public sideNavOpen = false;
    public editTool = '';
    public bookmarkTool = '';
    constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        this.matIconRegistry.addSvgIcon(`ruler`, this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/ruler.svg'));
        this.matIconRegistry.addSvgIcon(`house`, this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/house.svg'));
    }

    public changeEditTool(activeTool) {
        this.editTool = activeTool ? 'edit' : '';
    }
    public changeBookmarkTool(activeTool) {
        this.bookmarkTool = activeTool ? 'edit' : '';
    }
}
