import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevinfoPanelComponent } from './devinfo-panel.component';

describe('DevinfoPanelComponent', () => {
  let component: DevinfoPanelComponent;
  let fixture: ComponentFixture<DevinfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevinfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevinfoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
