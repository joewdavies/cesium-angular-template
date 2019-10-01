import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[matBadgeIcon]',
})
export class MatBadgeIconDirective {
    private _matBadgeIcon: string;
    public get matBadgeIcon(): string {
        return this._matBadgeIcon;
    }
    @Input()
    public set matBadgeIcon(value: string) {
        this._matBadgeIcon = value;
        const badge = this.el.nativeElement.querySelector('.mat-badge-content');
        if (value) {
            badge.style.display = 'flex';
            badge.style.alignItems = 'center';
            badge.style.justifyContent = 'center';
            badge.innerHTML = `<i class="material-icons" style="font-size: 17px">${this.matBadgeIcon}</i>`;
        } else {
            badge.removeAttribute('style');
        }
    }

    constructor(private el: ElementRef) {}
}
