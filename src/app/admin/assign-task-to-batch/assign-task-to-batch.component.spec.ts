import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTaskToBatchComponent } from './assign-task-to-batch.component';

describe('AssignTaskToBatchComponent', () => {
  let component: AssignTaskToBatchComponent;
  let fixture: ComponentFixture<AssignTaskToBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignTaskToBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignTaskToBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
