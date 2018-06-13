import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLastTaskComponent } from './my-last-task.component';

describe('MyLastTaskComponent', () => {
  let component: MyLastTaskComponent;
  let fixture: ComponentFixture<MyLastTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLastTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLastTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
