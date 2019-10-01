import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { TabPanelComponent } from './tab-panel.component';
import { takeUntil } from 'rxjs/operators';
import { ParentComponent } from '../../../core/parent-component.class';

@Component({
  selector: 'app-side-multipanel',
  templateUrl: './side-multipanel.component.html',
  styleUrls: ['./side-multipanel.component.scss'],
})
export class SideMultipanelComponent extends ParentComponent implements AfterContentInit {
  @ContentChildren(TabPanelComponent) public panels: QueryList<TabPanelComponent>;
  @Input() public sidePanel: MatSidenav;
  @Input() public position: string;
  @Input() public activeIndex = 0;

  private activePanel: TabPanelComponent;

  constructor() {
    super();
  }

  public ngAfterContentInit() {
    this.panels.forEach((panel, index) => {
      if (index === this.activeIndex) {
        panel.active = true;
        this.activePanel = panel;
      }
      // inicializamos la posición vertical de las pestañas
      panel.setVerticalTabPosition(index + 1);
      panel.position = this.position;
      // Nos subscribimos al cambio de pestaña activa
      panel
        .changeActive()
        .pipe(takeUntil(this.unSubscribe))
        .subscribe(value => {
          this.changeTab(panel);
        });
    });
  }

  public changeTab(tabPanel: TabPanelComponent) {
    if (this.activePanel === tabPanel) {
      this.sidePanel.toggle();
    } else {
      if (this.activePanel) {
        this.activePanel.active = false;
      }
      this.activePanel = tabPanel;
      this.activePanel.active = true;
      if (!this.sidePanel.opened) {
        this.sidePanel.toggle();
      }
    }
  }
}
