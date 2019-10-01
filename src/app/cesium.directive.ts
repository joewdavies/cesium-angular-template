import { Directive, ElementRef, OnInit } from '@angular/core';
import { SplashScreenService } from './services/splash-screen.service';

@Directive({
    selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {
    constructor(private el: ElementRef, private splashScreenService: SplashScreenService) { }
    public viewer;
    public ngOnInit() {
        this.viewer = new Cesium.Viewer(this.el.nativeElement, {
            animation: false,
            timeline: false
        });
        this.checkLoadedMap();
    }

    private checkLoadedMap() {
        // Inicio el loading
        this.splashScreenService.show();
        // setTimeout(() => this.splashScreenService.hide(), 10000);
        const eventHelper = new Cesium.EventHelper();
        eventHelper.add(this.viewer.scene.globe.tileLoadProgressEvent, tiles => {
            if (tiles === 0) {
                this.splashScreenService.hide();
                eventHelper.removeAll();
            }
        });
    }
}
