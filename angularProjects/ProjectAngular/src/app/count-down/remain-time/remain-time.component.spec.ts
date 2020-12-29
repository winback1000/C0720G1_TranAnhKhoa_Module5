import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainTimeComponent } from './remain-time.component';

describe('RemainTimeComponent', () => {
  let component: RemainTimeComponent;
  let fixture: ComponentFixture<RemainTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
