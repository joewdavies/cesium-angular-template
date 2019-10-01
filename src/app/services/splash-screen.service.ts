import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class SplashScreenService {
  private splashState = new Subject<boolean>();

  constructor() {}

  public getState(): Observable<boolean> {
    return this.splashState.asObservable();
  }
  public show() {
    this.splashState.next(true);
  }

  public hide() {
    this.splashState.next(false);
  }
}
