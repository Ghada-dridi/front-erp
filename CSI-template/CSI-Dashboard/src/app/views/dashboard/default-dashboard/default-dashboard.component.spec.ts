import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DefaultDashboardComponent } from './default-dashboard.component';

describe('DefaultDashboardComponent', () => {
  let component: DefaultDashboardComponent;
  let fixture: ComponentFixture<DefaultDashboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
