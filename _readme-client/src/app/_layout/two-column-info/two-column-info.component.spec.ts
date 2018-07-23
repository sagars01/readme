import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnInfoComponent } from './two-column-info.component';

describe('TwoColumnInfoComponent', () => {
  let component: TwoColumnInfoComponent;
  let fixture: ComponentFixture<TwoColumnInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
