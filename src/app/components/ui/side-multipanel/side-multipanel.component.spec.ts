import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMultipanelComponent } from './side-multipanel.component';

describe('SideMultipanelComponent', () => {
  let component: SideMultipanelComponent;
  let fixture: ComponentFixture<SideMultipanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SideMultipanelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMultipanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
