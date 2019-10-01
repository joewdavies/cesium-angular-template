import { Component, OnInit } from '@angular/core';
import { SplashScreenService } from '../../../services/splash-screen.service';

@Component({
    selector: 'app-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
    public active = false;

    constructor(private splashScreenService: SplashScreenService) {
        this.splashScreenService.getState().subscribe(active => {
            this.active = active;
        });
    }

    public ngOnInit() {}
}
