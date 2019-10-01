import { Subject } from 'rxjs/internal/Subject';
import { OnDestroy } from '@angular/core';

/**
 * Clase padre de los componentes
 */
export abstract class ParentComponent implements OnDestroy {
  public unSubscribe: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  public ngOnDestroy() {
    this.unSubscribe.next(true);
    this.unSubscribe.unsubscribe();
  }
}
