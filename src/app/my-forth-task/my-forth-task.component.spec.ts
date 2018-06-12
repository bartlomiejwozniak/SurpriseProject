import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyForthTaskComponent } from './my-forth-task.component';

describe('MyForthTaskComponent', () => {
  let component: MyForthTaskComponent;
  let fixture: ComponentFixture<MyForthTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyForthTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyForthTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
