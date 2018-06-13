import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFifthTaskComponent } from './my-fifth-task.component';

describe('MyFifthTaskComponent', () => {
  let component: MyFifthTaskComponent;
  let fixture: ComponentFixture<MyFifthTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFifthTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFifthTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
