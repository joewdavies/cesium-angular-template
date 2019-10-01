import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ParentComponent } from '../../../core/parent-component.class';

@Component({
    selector: 'app-tab-panel',
    templateUrl: './tab-panel.component.html',
    styleUrls: ['./tab-panel.component.scss'],
})
export class TabPanelComponent extends ParentComponent implements OnInit {
    @Input() public iconName: string;
    @Input() public tooltip?: string;
    @Input() public customIcon?: string;
    @Input() public badgeIcon?: string;
    public position: string;
    public active = false;
    @ViewChild('tab') private tabElement: ElementRef;
    private tabClicked = new Subject<any>();
    private tabsVerticalMargin = 5;
    private tabHeight = 50;

    constructor(private renderer: Renderer2) {
        super();
    }

    public ngOnInit() {}
    public selectTab() {
        this.tabClicked.next();
    }
    public changeActive(): Observable<any> {
        return this.tabClicked.asObservable();
    }

    public setVerticalTabPosition(indexOrder) {
        this.renderer.setStyle(
            this.tabElement.nativeElement,
            'top',
            this.tabHeight * indexOrder + this.tabsVerticalMargin * indexOrder + 'px',
        );
    }
}
