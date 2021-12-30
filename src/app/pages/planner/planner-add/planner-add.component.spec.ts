import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerAddComponent } from './planner-add.component';

describe('PlannerAddComponent', () => {
  let component: PlannerAddComponent;
  let fixture: ComponentFixture<PlannerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
