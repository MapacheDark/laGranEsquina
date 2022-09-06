import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarhComponent } from './dashboarh.component';

describe('DashboarhComponent', () => {
  let component: DashboarhComponent;
  let fixture: ComponentFixture<DashboarhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
