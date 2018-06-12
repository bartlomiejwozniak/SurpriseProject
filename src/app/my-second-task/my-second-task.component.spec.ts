import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondTaskComponent } from './my-second-task.component';

describe('MySecondTaskComponent', () => {
  let component: MySecondTaskComponent;
  let fixture: ComponentFixture<MySecondTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySecondTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
