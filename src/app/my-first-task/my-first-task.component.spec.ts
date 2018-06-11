import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstTaskComponent } from './my-first-task.component';

describe('MyFirstTaskComponent', () => {
  let component: MyFirstTaskComponent;
  let fixture: ComponentFixture<MyFirstTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
