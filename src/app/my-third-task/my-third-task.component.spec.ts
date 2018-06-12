import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThirdTaskComponent } from './my-third-task.component';

describe('MyThirdTaskComponent', () => {
  let component: MyThirdTaskComponent;
  let fixture: ComponentFixture<MyThirdTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyThirdTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThirdTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
